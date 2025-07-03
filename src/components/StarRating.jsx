import { useState } from "react";
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
  return (
    <div className="flex items-center justify-start gap-2">
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
                <FaStar className="text-base text-yellow-400" />
              ) : max >= index - 0.5 ? (
                <FaStarHalfAlt className="text-base text-yellow-400" />
              ) : (
                <FaRegStar className="text-base text-yellow-400" />
              )}
            </span>
          );
        })}
      </div>
      <span className="text-Text2 text-sm">
        ({userRate.rating ? "Your Rating" : count})
      </span>
    </div>
  );
}
