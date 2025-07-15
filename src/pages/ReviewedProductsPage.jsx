import ReturnButton from "../components/ReturnButton";
import { useProductsContext } from "../contexts/ProductsContext";
import { useProductContext } from "../contexts/ProductContext";
import TableEmpty from "../components/TableEmpty";
import Table from "../components/Table";
import PageComponent from "../components/PageComponent";
export default function ReviewedProducts() {
  const { ratedProducts } = useProductContext();
  const { products } = useProductsContext();
  const ratedProductsIds = ratedProducts.map((pro) => {
    return pro.id;
  });
  const ratedProductsList = products.filter((product) => {
    return ratedProductsIds.includes(product.id);
  });
  return (
    <PageComponent>
      <h1 className="text-size-c font-montserrat-semibold">Rated Products</h1>
      {!ratedProducts.length ? (
        <TableEmpty type="reviews" />
      ) : (
        <div className="flex flex-col gap-4">
          <Table type="reviews" list={ratedProductsList} />
          <div>
            <ReturnButton />
          </div>
        </div>
      )}
    </PageComponent>
  );
}
