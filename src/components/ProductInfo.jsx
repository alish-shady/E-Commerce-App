import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingDots from "./LoadingDots";
import Error from "./Error";
import { useProductContext } from "../contexts/ProductContext";
import { useCartContext } from "../contexts/CartContext";
import { IoIosHeartEmpty } from "react-icons/io";
import StarRating from "./StarRating";
import { useUserContext } from "../contexts/UserContext";
export default function ProductInfo() {
  const { id } = useParams();
  const { currentProduct, fetchProductDetails, isLoading, error, unmount } =
    useProductContext();
  const { addToCart, productExists } = useCartContext();
  const { userId } = useUserContext();
  const exists = productExists(currentProduct.id);
  const navigate = useNavigate();
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
      <div className="flex h-[25vh] w-full items-center justify-center">
        <LoadingDots />
      </div>
    );
  }
  return (
    <section>
      {currentProduct.id && (
        <div className="flex w-full justify-between">
          <div className="aspect-square w-[45%]">
            <img
              className="h-full w-full rounded-sm"
              src={currentProduct.image}
            />
          </div>
          <div className="text-size-c flex max-w-2/5 flex-col gap-2">
            <div className="border-b-Button flex flex-col gap-2 border-b py-2">
              <h2 className="font-montserrat-semibold">
                {currentProduct.title}
              </h2>
              <div className="flex items-center gap-2">
                <StarRating
                  productId={currentProduct.id}
                  rating={currentProduct.rating}
                  interactive={true}
                />
              </div>
              <span className="text-size-c font-medium">
                ${currentProduct.price}
              </span>
              <p className="text-size-a">{currentProduct.description}</p>
              <span className="bg-Secondary text-size-b w-fit rounded-sm p-1">
                {currentProduct.category}
              </span>
            </div>
            <div className="flex w-full">
              <button
                onClick={() =>
                  userId ? addToCart(currentProduct) : navigate("/signup")
                }
                className={`text-Text basis-full cursor-pointer rounded-md p-2 transition-all duration-200 ${exists ? "bg-Button1" : "bg-Button2 hover:bg-HoverButton2"}`}
                disabled={exists}
              >
                {exists ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
