import { createContext, useContext, useReducer } from "react";
function reducer(state, action) {
  if (action.type === "loading") {
    return { ...state, isLoading: true };
  } else if (action.type === "productLoaded") {
    return { ...state, isLoading: false, currentProduct: action.payload };
  } else {
    return { ...state, isLoading: false };
  }
}
const initialState = { isLoading: false, currentProduct: {} };
const ProductContext = createContext();
function ProductProvider({ children }) {
  const [{ currentProduct, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  async function fetchProductDetails(id) {
    try {
      dispatch({ type: "loading" });
      const res = await Promise.race([
        fetch(`https://fakestoreapi.com/products/${id}`),
        new Promise((resolve, reject) =>
          setTimeout(() => reject("Time ran out"), 10000),
        ),
      ]);
      const data = await res.json();
      dispatch({ type: "productLoaded", payload: data });
    } catch (err) {
      throw new Error(err);
    }
  }
  return (
    <ProductContext.Provider
      value={{ currentProduct, isLoading, fetchProductDetails }}
    >
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
