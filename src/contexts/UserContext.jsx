import { createContext, useCallback, useContext, useReducer } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { standardizeName, isPasswordValid } from "../utils/stringUtils";
function reducer(state, action) {
  switch (action.type) {
    case "userLoading":
      return { ...state, isLoading: true };
    case "userLoaded":
      return {
        ...state,
        isLoading: false,
        error: "",
        userFirstName: action.payLoad.firstname,
        userLastName: action.payLoad.lastname,
        userEmail: action.payLoad.email,
        userCart: action.payLoad.cart || [],
        userRatedProducts: action.payLoad.ratedproducts || [],
        userId: action.payLoad.id,
      };
    case "userUpdated":
      return {
        ...state,
        isLoading: false,
        ...action.payLoad,
      };
    case "errorHappened":
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    case "status/clear":
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case "userUnloaded":
      return { ...initialState };
  }
}

const initialState = {
  isLoading: false,
  error: "",
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  userCart: [],
  userRatedProducts: [],
  userId: "",
};
const UserContext = createContext();
function UserProvider({ children }) {
  const [
    {
      userFirstName,
      userLastName,
      userEmail,
      userCart,
      userRatedProducts,
      isLoading,
      userId,
      error,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  async function signUpUser(name, email, password) {
    dispatch({ type: "userLoading" });
    try {
      const valid = isPasswordValid(password);
      if (valid !== "valid") throw new Error(valid);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential) {
        const { user } = userCredential;
        const standardName = standardizeName(name);
        await setDoc(doc(db, "users", user.uid), {
          firstName: standardName[0],
          lastName: standardName[1],
          cart: userCart,
          ratedProducts: userRatedProducts,
          email: user.email,
        });
        dispatch({
          type: "userLoaded",
          payLoad: {
            firstname: standardName[0],
            lastname: standardName[1],
            email: user.email,
            id: user.uid,
          },
        });
      }
    } catch (error) {
      let errorMessage;
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          errorMessage = "The email provided is not valid.";
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          errorMessage =
            "The email provided is already associated with an account.";
          break;
        default:
          errorMessage = error.message;
      }
      dispatch({ type: "errorHappened", payLoad: errorMessage });
    }
  }
  async function loginUser(email, password) {
    dispatch({ type: "userLoading" });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential) {
        const user = userCredential.user;
        const res = await getDoc(doc(db, "users", user.uid));
        const userData = res.data();
        dispatch({
          type: "userLoaded",
          payLoad: {
            firstname: userData.firstName,
            lastname: userData.lastName,
            cart: userData.cart,
            ratedproducts: userData.ratedProducts,
            email: user.email,
            id: user.uid,
          },
        });
      }
    } catch (error) {
      let errorMessage;
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          errorMessage = "The email provided is not valid.";
          break;
        case "Firebase: Error (auth/invalid-credential).":
          errorMessage = "The email or password is wrong.";
          break;
        default:
          errorMessage = error.message;
      }
      dispatch({ type: "errorHappened", payLoad: errorMessage });
    }
  }
  async function updateUser(userCredentials) {
    dispatch({ type: "userLoading" });
    if (userId && userCredentials) {
      try {
        await updateDoc(doc(db, "users", userId), {
          ...userCredentials,
        });
        const {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
        } = userCredentials;
        const changedData = Object.fromEntries(
          Object.entries({ userFirstName, userLastName, userEmail }).filter(
            ([_, value]) => value !== undefined,
          ),
        );
        if (changedData.userEmail) {
          if (!auth.currentUser) {
            dispatch({
              type: "errorHappened",
              payLoad: "No user is signed in to verify email.",
            });
            return;
          }
          await verifyBeforeUpdateEmail(auth.currentUser, userEmail);
          dispatch({
            type: "errorHappened",
            payLoad: `A verification link was sent to ${userEmail}`,
          });
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        dispatch({
          type: "userUpdated",
          payLoad: changedData,
        });
        return true;
      } catch (error) {
        const errorMessage = error.message;
        dispatch({ type: "errorHappened", payLoad: errorMessage });
        return false;
      }
    }
  }
  async function changePassword(password) {
    dispatch({ type: "userLoading" });
    try {
      if (!auth.currentUser) {
        dispatch({
          type: "errorHappened",
          payLoad: "No user is signed in to verify password.",
        });
      }
      const valid = isPasswordValid(password.new);
      if (valid !== "valid") throw new Error(valid);
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password.current,
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      if (password.new === password.confirmNew) {
        await updatePassword(auth.currentUser, password.new);
        return true;
      } else
        throw new Error(
          "The new password doesn't match the password confirmation.",
        );
    } catch (error) {
      let errorMessage;
      switch (error.message) {
        case "Firebase: Error (auth/invalid-credential).":
          errorMessage = "Password is incorrect.";
          break;
        default:
          errorMessage = error.message;
      }
      dispatch({ type: "errorHappened", payLoad: errorMessage });
      return false;
    }
  }

  const updateCart = useCallback(
    async function updateCart(cart) {
      if (userId && cart) {
        try {
          await updateDoc(doc(db, "users", userId), {
            cart: cart,
          });
        } catch (error) {
          const errorMessage = error.message;
          dispatch({ type: "errorHappened", payLoad: errorMessage });
          return false;
        }
      }
    },
    [userId],
  );
  const updateRatedProducts = useCallback(
    async function updateRatedProducts(ratedProducts) {
      if (userId && ratedProducts) {
        try {
          await updateDoc(doc(db, "users", userId), {
            ratedProducts: ratedProducts,
          });
        } catch (error) {
          const errorMessage = error.message;
          dispatch({ type: "errorHappened", payLoad: errorMessage });
          return false;
        }
      }
    },
    [userId],
  );
  const logoutUser = useCallback(function logoutUser() {
    try {
      if (auth.currentUser) {
        dispatch({ type: "userUnloaded" });
      } else {
        throw new Error("No user is signed in to verify password.");
      }
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: "errorHappened", payLoad: errorMessage });
    }
  }, []);
  const clearUserStatus = useCallback(() => {
    dispatch({ type: "status/clear" });
  }, [dispatch]);
  return (
    <UserContext.Provider
      value={{
        userFirstName,
        userLastName,
        isLoading,
        userEmail,
        userCart,
        userRatedProducts,
        userId,
        error,
        signUpUser,
        loginUser,
        logoutUser,
        updateUser,
        changePassword,
        updateCart,
        updateRatedProducts,
        clearUserStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
function useUserContext() {
  const contextValue = useContext(UserContext);
  if (contextValue === undefined)
    throw new Error(
      "UserContext is not used in the right place (inside the provider)",
    );
  return contextValue;
}
export { useUserContext, UserProvider };
