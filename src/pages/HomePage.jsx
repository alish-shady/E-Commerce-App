import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import SortandFilter from "../components/Sort&Filter";

export default function HomePage() {
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <ProductList>
          <SortandFilter />
        </ProductList>
      </main>
      <Footer />
    </>
  );
}
