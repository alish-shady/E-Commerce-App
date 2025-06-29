import { createContext, useContext, useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "productsLoaded":
      return { ...state, isLoading: false, products: action.payload };
    case "pageMoved":
      return { ...state, currentPage: state.currentPage + action.payload };
    case "pageChanged":
      return { ...state, currentPage: action.payload };
  }
}

const initialState = {
  products: [],
  isLoading: true,
  currentPage: 1,
  productsPerPage: 10,
};
const ProductsContext = createContext();
function ProductsProvider({ children }) {
  const [{ products, isLoading, productsPerPage, currentPage }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(function () {
    async function fetchProducts() {
      try {
        dispatch({ type: "loading" });
        const res = await Promise.race([
          fetch("https://fakestoreapi.com/products"),
          new Promise((resolve, reject) =>
            setTimeout(() => reject("Time ran out"), 10000),
          ),
        ]);
        const data = await res.json();
        dispatch({ type: "productsLoaded", payload: data });
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchProducts();
  }, []);
  function movePage(dir) {
    switch (dir) {
      case "right":
        dispatch({ type: "pageMoved", payload: 1 });
        break;
      case "left":
        dispatch({ type: "pageMoved", payload: -1 });
        break;
      default:
        throw new Error("Not a valid direction");
    }
  }
  function goToPage(num) {
    if (num > Math.ceil(products.length / productsPerPage) || num < 1)
      throw new Error("Wrong page number");
    dispatch({ type: "pageChanged", payload: num });
  }
  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        productsPerPage,
        currentPage,
        movePage,
        goToPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
function useProductsContext() {
  const contextValue = useContext(ProductsContext);
  if (contextValue === undefined)
    throw new Error(
      "ProductsContext is not used in the right place (inside the provider)",
    );
  return contextValue;
}
export { ProductsProvider, useProductsContext };
