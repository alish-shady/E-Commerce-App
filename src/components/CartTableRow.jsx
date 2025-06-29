import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useCartContext } from "../contexts/CartContext";
export function CartTableRow({ product }) {
  const { changeQuantity, removeFromCart } = useCartContext();
  return (
    <div className="w-full rounded-sm py-4 shadow-sm">
      <ul className="ml-auto grid w-5/6 grid-cols-4 items-center gap-4">
        <li>
          <div className="relative flex items-center gap-2">
            <MdCancel
              onClick={() => removeFromCart(product.id)}
              className="absolute -top-2 -left-2 h-4 w-4 cursor-pointer text-red-200 duration-75 hover:text-red-400 active:text-red-600"
            />
            <img src={product.image} className="max-h-16 max-w-8" />
            <span>{product.title}</span>
          </div>
        </li>
        <li className="text-gray-400">${product.price}</li>
        <li>
          <div className="flex items-center gap-2 justify-self-start rounded-md border border-gray-400 p-2">
            <span>{product.quantity}</span>
            <div className="flex flex-col">
              <MdOutlineKeyboardArrowUp
                className="cursor-pointer text-sm duration-75 hover:text-red-400"
                onClick={() => changeQuantity("inc", product.id)}
              />
              <MdOutlineKeyboardArrowDown
                className="cursor-pointer text-sm duration-75 hover:text-red-400"
                onClick={() => changeQuantity("dec", product.id)}
              />
            </div>
          </div>
        </li>
        <li className="text-gray-400">${product.subTotal}</li>
      </ul>
    </div>
  );
}
