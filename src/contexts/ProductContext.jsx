import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { useUserContext } from "./UserContext";
function reducer(state, action) {
  if (action.type === "loading") {
    return { ...state, isLoading: true };
  } else if (action.type === "productLoaded") {
    return {
      ...state,
      isLoading: false,
      currentProduct: action.payLoad,
      error: "",
    };
  } else if (action.type === "ratingChanged") {
    return {
      ...state,
      ratedProducts:
        action.payLoad.length !== undefined
          ? action.payLoad
          : [...state.ratedProducts, action.payLoad],
    };
  } else if (action.type === "rejected") {
    return {
      ...state,
      isLoading: false,
      error: action.payLoad,
      currentProduct: {},
    };
  } else if (action.type === "unmounted") {
    return {
      isLoading: false,
      currentProduct: {},
      error: "",
      ratedProducts: state.ratedProducts.length ? state.ratedProducts : [],
    };
  }
}
const initialState = {
  isLoading: false,
  currentProduct: {},
  ratedProducts: [],
  error: "",
};
const ProductContext = createContext();
function ProductProvider({ children }) {
  const [{ currentProduct, isLoading, error, ratedProducts }, dispatch] =
    useReducer(reducer, initialState);
  const { userRatedProducts, updateRatedProducts, userId } = useUserContext();
  const isInitialLoad = useRef(true);
  useEffect(
    function () {
      if (userId) {
        dispatch({ type: "ratingChanged", payLoad: userRatedProducts });
        isInitialLoad.current = false;
      } else {
        isInitialLoad.current = true;
        dispatch({ type: "ratingChanged", payLoad: [] });
      }
    },
    [userRatedProducts, userId],
  );
  useEffect(
    function () {
      if (isInitialLoad.current) return;
      updateRatedProducts(ratedProducts);
    },
    [ratedProducts, updateRatedProducts],
  );
  async function fetchProductDetails(id) {
    try {
      dispatch({ type: "loading" });
      let timeoutId;
      const res = await Promise.race([
        fetch(`https://fakestoreapi.com/products/${id}`),
        new Promise(
          (resolve) =>
            (timeoutId = setTimeout(() => {
              resolve("Time ran out");
            }, 5000)),
        ),
      ]);
      if (!res.ok) {
        throw new Error();
      }
      clearTimeout(timeoutId);
      const data = await res.json();
      dispatch({ type: "productLoaded", payLoad: data });
    } catch {
      dispatch({
        type: "rejected",
        payLoad:
          "There was an error with fetching the details of this product.",
      });
    }
  }

  const unmount = useCallback(function unmount() {
    dispatch({ type: "unmounted" });
  }, []);

  const contextValue = useMemo(() => {
    function rateProduct(productId, rating) {
      const exists = ratedProducts.findIndex((item) => item.id === productId);
      exists !== -1 && ratedProducts.splice(exists, 1);
      dispatch({
        type: "ratingChanged",
        payLoad: { id: productId, rating: rating },
      });
    }
    return {
      currentProduct,
      isLoading,
      error,
      ratedProducts,
      fetchProductDetails,
      rateProduct,
      unmount,
    };
  }, [currentProduct, error, isLoading, ratedProducts, unmount]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
function useProductContext() {
  const contextValue = useContext(ProductContext);
  if (contextValue === undefined)
    throw new Error(
      "ProductContext is not used in the right place (inside the provider)",
    );
  return contextValue;
}
export { useProductContext, ProductProvider };
