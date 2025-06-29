import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosHeartEmpty } from "react-icons/io";
import ItemList from "../components/ItemList";
import LoadingDots from "../components/LoadingDots";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useCartContext } from "../contexts/CartContext";
export default function ProductDetails() {
  const { id } = useParams();
  const { currentProduct, fetchProductDetails, isLoading } =
    useProductContext();
  const { addToCart, productExists } = useCartContext();
  const exists = productExists(currentProduct.id);
  useEffect(
    function () {
      fetchProductDetails(id);
    },
    [id],
  );
  if (isLoading || !currentProduct || currentProduct.id !== Number(id)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingDots />
      </div>
    );
  }
  return (
    <>
      <main className="mb-8 flex w-full flex-col gap-8 px-16">
        <Header />
        <section>
          <div className="flex w-full justify-between gap-16">
            <div className="aspect-square max-w-[45%]">
              <img
                className="max-h-full w-full rounded-sm"
                src={currentProduct.image}
              />
            </div>
            <div className="flex max-w-2/5 flex-col gap-2">
              <div className="flex flex-col gap-2 border-b border-b-gray-400 py-2">
                <h2 className="text-2xl font-semibold">
                  {currentProduct.title}
                </h2>
                <div className="flex items-center gap-2">
                  Rating
                  <span className="text-sm text-gray-400">(120 reviews)</span>
                </div>
                <span className="text-xl font-medium">
                  ${currentProduct.price}
                </span>
                <p className="text-xs">{currentProduct.description}</p>
                <span className="w-fit rounded-sm bg-gray-200 p-1 text-sm">
                  {currentProduct.category}
                </span>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => addToCart(currentProduct)}
                  className={`basis-3/4 cursor-pointer rounded-md bg-gray-200 p-2 transition-all duration-200 ${exists ? "bg-red-400 text-white" : "opacity-100 hover:bg-gray-400 hover:text-white active:bg-gray-600"}`}
                  disabled={exists}
                >
                  {exists ? "Added to Cart!" : "Add to Cart"}
                </button>
                <button className="aspect-square rounded-md border border-gray-400 px-2">
                  <IoIosHeartEmpty className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <ItemList
          category={currentProduct.category}
          listName="Related Items"
          currentProductId={currentProduct.id}
        />
      </main>
      <Footer />
    </>
  );
}
