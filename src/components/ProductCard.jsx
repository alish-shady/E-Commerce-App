import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const { title, price, category, image, id, rating } = product;
  return (
    <Link to={`/productdetail/${id}`}>
      <div
        title={title}
        className="border-Secondary shadow-Secondary relative flex aspect-square h-full w-full cursor-pointer flex-col gap-2 rounded-2xl border p-4 text-sm shadow-md transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="text-Text2 absolute top-2 left-2 text-xs tracking-wide uppercase">
          {category}
        </div>
        <div className="flex w-full items-center justify-center py-4">
          <img
            src={image}
            className="size-36 rounded-md border border-gray-200 shadow-inner"
            alt="product image"
          />
        </div>
        <h2 className="truncate text-xs font-semibold">{title}</h2>
        <p className="text-Text2">
          Price: <span className="text-Secondary2 font-medium">${price}</span>
        </p>
        <StarRating productId={id} rating={rating} interactive={false} />
      </div>
    </Link>
  );
}
