import { FaTrashAlt } from "react-icons/fa";
import { useCartContext } from "../contexts/CartContext";

export default function CartModal({ product }) {
  const { removeFromCart } = useCartContext();
  return (
    <div className="border-b-Text2 flex-col gap-2 border-b pb-2 md:hidden lg:flex">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col justify-between">
          <FaTrashAlt
            onClick={() => removeFromCart(product.id)}
            className="text-HoverButton2 hover:text-Button2 cursor-pointer self-start text-2xl duration-75"
          />
          <h2 className="font-montserrat-semibold text-lg">{product.title}</h2>
        </div>
        <img
          src={product.image}
          className="aspect-square w-1/6"
          alt={product.title}
        />
      </div>
      <span className="bg-Secondary flex w-fit items-center justify-center rounded-sm px-1 text-sm">
        {product.category}
      </span>
      <span className="font-montserrat-semibold text-sm">${product.price}</span>
    </div>
  );
}
