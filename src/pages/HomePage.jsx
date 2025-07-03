import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import SortandFilter from "../components/Sort&Filter";

export default function HomePage() {
  return (
    <>
      <main className="bg-Primary text-Text1 flex flex-col gap-4 px-16 pb-8">
        <Header />
        <ProductList>
          <SortandFilter />
        </ProductList>
      </main>
      <Footer />
    </>
  );
}
