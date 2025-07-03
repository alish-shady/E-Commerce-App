import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosHeartEmpty } from "react-icons/io";
import ItemList from "../components/ItemList";
import LoadingDots from "../components/LoadingDots";
import Error from "../components/Error";
import ProductInfo from "../components/ProductInfo";
export default function ProductDetails() {
  return (
    <>
      <main className="bg-Primary text-Text1 mb-8 flex w-full flex-col gap-8 px-16">
        <Header />
        <ProductInfo />
        <ItemList listName="Related Items" />
      </main>
      <Footer />
    </>
  );
}
