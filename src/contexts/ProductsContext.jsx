import { createContext, useContext, useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "productsLoading":
      return { ...state, isLoading: true };
    case "productsLoaded":
      return { ...state, isLoading: false, products: action.payload };
    case "productsFilterSet":
      return { ...state, filteredCategory: action.payload };
    case "productSortingSet":
      return { ...state, sortBy: action.payload };
    case "pageMoved":
      return { ...state, currentPage: state.currentPage + action.payload };
    case "pageChanged":
      return { ...state, currentPage: action.payload };
  }
}

const initialState = {
  products: [],
  filteredCategory: "",
  sortBy: "",
  isLoading: false,
  currentPage: 1,
  productsPerPage: 10,
};
const ProductsContext = createContext();
function ProductsProvider({ children }) {
  const [
    {
      products,
      filteredCategory,
      sortBy,
      isLoading,
      productsPerPage,
      currentPage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(function () {
    async function fetchProducts() {
      try {
        dispatch({ type: "productsLoading" });
        const res = await Promise.race([
          fetch("https://fakestoreapi.com/products"),
          new Promise((resolve, reject) =>
            setTimeout(() => reject("Time ran out"), 5000),
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
  function alterFilter(cat) {
    if (!cat) dispatch({ type: "productsFilterSet", payload: "" });
    dispatch({ type: "productsFilterSet", payload: cat });
  }
  function alterSorting(sortBy) {
    if (!sortBy) dispatch({ type: "productSortingSet", payload: "" });
    else dispatch({ type: "productSortingSet", payload: sortBy });
  }
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
        filteredCategory,
        sortBy,
        productsPerPage,
        currentPage,
        alterFilter,
        alterSorting,
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
      "CitiesContext is not used in the right place (inside the provider)",
    );
  return contextValue;
}
export { ProductsProvider, useProductsContext };
