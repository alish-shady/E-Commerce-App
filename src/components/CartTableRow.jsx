import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
export function CartTableRow({ product }) {
  const { changeQuantity, removeFromCart } = useCartContext();
  return (
    <div className="w-full rounded-sm py-4 shadow-sm">
      <ul className="ml-auto grid w-5/6 grid-cols-4 items-center gap-4">
        <Link to={`/productdetail/${product.id}`}>
          <li>
            <div className="relative flex items-center gap-2">
              <MdCancel
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeFromCart(product.id);
                }}
                className="text-HoverButton2 hover:text-Button2 absolute -top-2 -left-2 h-4 w-4 cursor-pointer duration-75"
              />
              <img src={product.image} className="max-h-16 max-w-8" />
              <span>{product.title}</span>
            </div>
          </li>
        </Link>
        <li className="text-Text2">${product.price}</li>
        <li>
          <div className="border-Text2 flex items-center gap-2 justify-self-start rounded-md border p-2">
            <span>{product.quantity}</span>
            <div className="flex flex-col">
              <MdOutlineKeyboardArrowUp
                className="hover:text-Secondary2 cursor-pointer text-sm duration-75"
                onClick={() => changeQuantity("inc", product.id)}
              />
              <MdOutlineKeyboardArrowDown
                className="hover:text-Secondary2 cursor-pointer text-sm duration-75"
                onClick={() => changeQuantity("dec", product.id)}
              />
            </div>
          </div>
        </li>
        <li className="text-Text2">${product.subTotal}</li>
      </ul>
    </div>
  );
}
