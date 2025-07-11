import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import TextInput from "./TextInput,";
import { useEffect, useReducer, useState } from "react";
import WarnUser from "./WarnUser";
import LoadingDots from "./LoadingDots";
import { standardizeFirstLast } from "../utils/stringUtils";
export default function Profile() {
  const {
    userFirstName,
    userLastName,
    userEmail,
    updateUser,
    changePassword,
    clearUserStatus,
    isLoading,
    error,
  } = useUserContext();
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [email, setEmail] = useState(userEmail);
  const [password, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "current")
        return { ...state, current: action.payload };
      if (action.type === "new") return { ...state, new: action.payload };
      if (action.type === "confirmNew")
        return { ...state, confirmNew: action.payload };
    },
    {
      current: "",
      new: "",
      confirmNew: "",
    },
  );
  const [typingError, setTypingError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    return clearUserStatus;
  }, [clearUserStatus]);
  async function handleSave() {
    setTypingError("");
    let allOperationsSucceeded = true;
    const dataToUpdate = {};
    if (userFirstName !== firstName) {
      dataToUpdate.firstName = standardizeFirstLast(firstName);
    }
    if (userLastName !== lastName) {
      dataToUpdate.lastName = standardizeFirstLast(lastName);
    }
    if (email !== userEmail) {
      dataToUpdate.email = email.toLowerCase();
    }
    if (Object.keys(dataToUpdate).length > 0) {
      const profileUpdateSuccess = await updateUser(dataToUpdate);
      if (!profileUpdateSuccess) allOperationsSucceeded = false;
    }
    const fields = [password.current, password.new, password.confirmNew];
    const filledCount = fields.filter((field) => field).length;
    if (
      password.new !== "" &&
      password.current !== "" &&
      password.confirmNew !== ""
    ) {
      const passwordUpdateSuccess = await changePassword(password);
      if (!passwordUpdateSuccess) allOperationsSucceeded = false;
    } else if (filledCount > 0 && filledCount < fields.length) {
      setTypingError("there is something wrong with password input values");
      allOperationsSucceeded = false;
    }
    if (allOperationsSucceeded) {
      navigate("/");
    }
  }
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-lg">
        Hello <span className="text-Secondary2">{userFirstName}</span>!
      </h1>
      <div className="border-Secondary shadow-Secondary relative grid h-full w-full grid-cols-2 gap-x-8 gap-y-4 rounded-2xl border p-4 text-sm shadow-md">
        <TextInput type="First Name" value={firstName} setter={setFirstName} />
        <TextInput type="Last Name" value={lastName} setter={setLastName} />
        <TextInput type="Email" value={email} setter={setEmail} />
        <TextInput type="Change Password" value={password} setter={dispatch} />
        {typingError && <WarnUser message={typingError} />}
        {error && <WarnUser message={error} />}
        <div className="col-span-2 flex justify-end gap-6">
          <button
            onClick={() => navigate("/")}
            className="hover:text-HoverButton2 cursor-pointer duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="hover:text-Button2 bg-Button2 text-Text hover:bg-Text relative cursor-pointer rounded-sm border p-2 text-sm duration-200"
          >
            {isLoading ? (
              <div className="bg-Primary border-Button2 absolute top-0 right-0 flex h-full w-full items-center justify-center border backdrop-blur-xs">
                <LoadingDots />
              </div>
            ) : (
              ""
            )}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
