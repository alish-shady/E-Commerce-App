import { useProductsContext } from "../contexts/ProductsContext";
import LoadingDots from "./LoadingDots";
import ProductCard from "./ProductCard";
import PaginationControls from "./PaginationControls";
import { useSearchParams } from "react-router-dom";
import NotAvailable from "./NotAvailable";
import Error from "./Error";
import { useEffect } from "react";
export default function ProductList({ children }) {
  const { products, isLoading, currentPage, productsPerPage, goToPage, error } =
    useProductsContext();
  const [searchParams, _] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const filteredCategory = searchParams.get("filter");
  const sortedProducts = JSON.parse(JSON.stringify(products));
  sortedProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
  let filteredProducts = sortedProducts.filter((product) => {
    return filteredCategory ? product.category === filteredCategory : true;
  });
  if (searchParams.get("query") !== null) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchParams.get("query")),
    );
  }
  const productsOnCurrentPage = filteredProducts.slice(
    productsPerPage * (currentPage - 1),
    productsPerPage * currentPage,
  );
  useEffect(() => {
    if (!productsOnCurrentPage.length && filteredProducts.length) {
      goToPage(1);
    }
  }, [productsOnCurrentPage.length, goToPage, filteredProducts.length]);
  if (error && !products.length) {
    return <Error message={error} />;
  }
  return (
    <div className="flex justify-between gap-4">
      {children}
      {isLoading ? (
        <LoadingDots />
      ) : (
        <div className="flex w-full flex-col gap-8">
          {filteredProducts.length ? (
            <>
              <div className="grid w-full place-content-end gap-x-10 gap-y-4 md:grid-cols-[repeat(auto-fill,480px)] lg:grid-cols-[repeat(auto-fill,365px)] xl:grid-cols-[repeat(auto-fill,280px)] 2xl:grid-cols-[repeat(auto-fill,240px)]">
                {productsOnCurrentPage.map(function (product) {
                  return <ProductCard product={product} key={product.id} />;
                })}
              </div>
              <PaginationControls
                pages={Math.ceil(filteredProducts.length / productsPerPage)}
                results={filteredProducts}
              />
            </>
          ) : (
            <NotAvailable />
          )}
        </div>
      )}
    </div>
  );
}
