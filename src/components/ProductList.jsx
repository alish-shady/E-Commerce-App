import { useProductsContext } from "../contexts/ProductsContext";
import LoadingDots from "./LoadingDots";
import ProductCard from "./ProductCard";
import PaginationControls from "./PaginationControls";
export default function ProductList({ children }) {
  const {
    products,
    filteredCategory,
    sortBy,
    isLoading,
    currentPage,
    productsPerPage,
  } = useProductsContext();
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
  const productsOnCurrentPage = sortedProducts.slice(
    productsPerPage * (currentPage - 1),
    productsPerPage * currentPage,
  );
  return (
    <div className="flex justify-between gap-4">
      {children}
      {isLoading ? (
        <LoadingDots />
      ) : (
        <div className="flex w-full flex-col gap-8">
          <div className="grid w-full grid-cols-[repeat(auto-fit,288px)] place-content-between gap-y-4">
            {products.length &&
              productsOnCurrentPage.map(function (product) {
                return filteredCategory ? (
                  product.category === filteredCategory && (
                    <ProductCard product={product} key={product.id} />
                  )
                ) : (
                  <ProductCard product={product} key={product.id} />
                );
              })}
          </div>
          <PaginationControls
            pages={Math.ceil(products.length / productsPerPage)}
            results={sortedProducts}
          />
        </div>
      )}
    </div>
  );
}
