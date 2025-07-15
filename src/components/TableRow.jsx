import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
export default function TableRow({ product, type = "cart" }) {
  const { changeQuantity, removeFromCart } = useCartContext();
  return (
    <div className="text-size-e w-full rounded-sm shadow-sm md:py-2 lg:py-4">
      <ul
        className={`ml-auto grid w-5/6 items-center gap-4 ${
          type === "cart" ? "grid-cols-4" : "grid-cols-3"
        }`}
      >
        <Link to={`/productdetail/${product.id}`}>
          <li>
            <div className="relative flex h-16 items-center gap-2">
              {type === "cart" ? (
                <MdCancel
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFromCart(product.id);
                  }}
                  className="text-HoverButton2 hover:text-Button2 absolute -top-2 -left-2 cursor-pointer duration-75 md:h-6 md:w-6 lg:h-4 lg:w-4"
                />
              ) : null}
              <img src={product.image} className="max-h-full max-w-12" />
              <span className="md:text-xs lg:text-inherit">
                {product.title}
              </span>
            </div>
          </li>
        </Link>
        <li className="text-Text2">${product.price}</li>
        {type === "cart" ? (
          <>
            <li>
              <div className="border-Text2 flex items-center gap-2 justify-self-start rounded-md border p-2">
                <span>{product.quantity}</span>
                <div className="flex flex-col">
                  <MdOutlineKeyboardArrowUp
                    className="hover:text-Secondary2 text-size-e cursor-pointer duration-75"
                    onClick={() => changeQuantity("inc", product.id)}
                  />
                  <MdOutlineKeyboardArrowDown
                    className="hover:text-Secondary2 text-size-e cursor-pointer duration-75"
                    onClick={() => changeQuantity("dec", product.id)}
                  />
                </div>
              </div>
            </li>
            <li className="text-Text2">${product.subTotal}</li>
          </>
        ) : (
          <li>
            <StarRating
              productId={product.id}
              rating={product.rating}
              interactive={false}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
