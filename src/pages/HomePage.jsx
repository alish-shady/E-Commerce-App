import ProductList from "../components/ProductList";
import SortandFilter from "../components/Sort&Filter";
import PageComponent from "../components/PageComponent";
export default function HomePage() {
  return (
    <PageComponent>
      <ProductList>
        <SortandFilter />
      </ProductList>
    </PageComponent>
  );
}
