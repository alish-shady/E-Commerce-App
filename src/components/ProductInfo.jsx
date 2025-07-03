import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingDots from "./LoadingDots";
import Error from "./Error";
import { useProductContext } from "../contexts/ProductContext";
import { useCartContext } from "../contexts/CartContext";
import { IoIosHeartEmpty } from "react-icons/io";
import StarRating from "./StarRating";
export default function ProductInfo() {
  const { id } = useParams();
  const { currentProduct, fetchProductDetails, isLoading, error, unmount } =
    useProductContext();
  const { addToCart, productExists } = useCartContext();
  const exists = productExists(currentProduct.id);
  useEffect(
    function () {
      if (id) fetchProductDetails(id);
    },
    [id],
  );
  useEffect(
    function () {
      return unmount;
    },
    [unmount],
  );
  if (error && !currentProduct.id) {
    return <Error message={error} />;
  }
  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingDots />
      </div>
    );
  }
  return (
    <section>
      {currentProduct.id && (
        <div className="flex w-full justify-between gap-16">
          <div className="aspect-square max-w-[45%]">
            <img
              className="max-h-full w-full rounded-sm"
              src={currentProduct.image}
            />
          </div>
          <div className="flex max-w-2/5 flex-col gap-2">
            <div className="border-b-Button flex flex-col gap-2 border-b py-2">
              <h2 className="text-2xl font-semibold">{currentProduct.title}</h2>
              <div className="flex items-center gap-2">
                <StarRating
                  productId={currentProduct.id}
                  rating={currentProduct.rating}
                  interactive={true}
                />
              </div>
              <span className="text-xl font-medium">
                ${currentProduct.price}
              </span>
              <p className="text-xs">{currentProduct.description}</p>
              <span className="bg-Secondary w-fit rounded-sm p-1 text-sm">
                {currentProduct.category}
              </span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => addToCart(currentProduct)}
                className={`text-Text basis-3/4 cursor-pointer rounded-md p-2 transition-all duration-200 ${exists ? "bg-Button1" : "bg-Button2 hover:bg-HoverButton2"}`}
                disabled={exists}
              >
                {exists ? "Added to Cart!" : "Add to Cart"}
              </button>
              <button className="border-Text2 aspect-square rounded-md border px-2">
                <IoIosHeartEmpty className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
