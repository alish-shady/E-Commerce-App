import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useProductContext } from "../contexts/ProductContext";

export default function StarRating({ productId, rating, interactive }) {
  const [hover, setHover] = useState(null);
  const { rateProduct, ratedProducts } = useProductContext();
  const [userRate, setUserRate] = useState(
    () =>
      ratedProducts.find((item) => item.id === productId) ?? {
        id: productId,
        rating: null,
      },
  );
  const { rate, count } = rating;
  const max = hover ?? userRate?.rating ?? rate;
  useEffect(() => {
    setUserRate(
      ratedProducts.find((item) => item.id === productId) ?? {
        id: productId,
        rating: null,
      },
    );
  }, [ratedProducts, productId]);
  return (
    <div className="flex items-center justify-start gap-2 md:text-2xl lg:text-xl xl:text-lg 2xl:text-base">
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => {
          const index = i + 1;
          return (
            <span
              key={i}
              className="cursor-pointer"
              onMouseEnter={() => interactive && setHover(index)}
              onMouseLeave={() => interactive && setHover(null)}
              onClick={() => {
                if (interactive) {
                  setUserRate({ rating: index });
                  rateProduct(productId, index);
                }
              }}
            >
              {max >= index ? (
                <FaStar className="text-yellow-400" />
              ) : max >= index - 0.5 ? (
                <FaStarHalfAlt className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-yellow-400" />
              )}
            </span>
          );
        })}
      </div>
      <span className="text-Text2 text-xs md:hidden lg:flex">
        ({userRate.rating ? "Your Rating" : count})
      </span>
    </div>
  );
}
