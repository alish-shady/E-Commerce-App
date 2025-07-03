import { Link } from "react-router-dom";

export default function ItemCard({ product }) {
  const { id, title, price, image } = product;
  return (
    <Link to={`/productdetail/${id}`}>
      <div
        title={title}
        className="flex w-64 shrink-0 snap-start flex-col gap-2 rounded-2xl p-4 text-sm transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="flex w-full items-center justify-center">
          <img
            src={image}
            className="border-Secondary aspect-square w-full rounded-md border object-contain shadow-inner"
            alt="product image"
          />
        </div>
        <h2 className="truncate text-lg font-semibold">{title}</h2>
        <p className="text-Text2">
          Price: <span className="font-medium">${price}</span>
        </p>
      </div>
    </Link>
  );
}
