import ItemList from "../components/ItemList";
import ProductInfo from "../components/ProductInfo";
import PageComponent from "../components/PageComponent";
export default function ProductDetails() {
  return (
    <PageComponent>
      <ProductInfo />
      <ItemList listName="Related Items" />
    </PageComponent>
  );
}
