import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const { title, price, category, image, id, rating } = product;
  return (
    <Link to={`/productdetail/${id}`}>
      <div
        title={title}
        className="border-Secondary shadow-Secondary text-size-d relative flex aspect-square h-max w-full cursor-pointer flex-col justify-center gap-2 rounded-2xl border p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="text-Text2 text-size-e absolute top-2 left-2 tracking-wide uppercase">
          {category}
        </div>
        <div className="flex w-full items-center justify-center py-4">
          <img
            src={image}
            className="rounded-md border border-gray-200 shadow-inner md:size-52 lg:size-48 xl:size-40 2xl:size-36"
            alt="product image"
          />
        </div>
        <h2 className="text-size-e font-montserrat-semibold truncate">
          {title}
        </h2>
        <p className="text-Text2">
          Price: <span className="text-Secondary2 font-medium">${price}</span>
        </p>
        <StarRating productId={id} rating={rating} interactive={false} />
      </div>
    </Link>
  );
}
