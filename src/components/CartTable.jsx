import { CartTableRow } from "./CartTableRow";
import { useCartContext } from "../contexts/CartContext";
export default function CartTable() {
  const { cart: cartedProducts } = useCartContext();
  return (
    <div className="flex w-full flex-col gap-4 text-sm">
      <div className="w-full rounded-sm py-4 shadow-sm">
        <ul className="ml-auto grid w-5/6 grid-cols-4 gap-4">
          <li className="flex w-full">Product</li>
          <li className="flex w-full">Price</li>
          <li className="flex w-full">Quantity</li>
          <li className="flex w-full">Subtotal</li>
        </ul>
      </div>
      {cartedProducts.map((product) => {
        return <CartTableRow key={product.id} product={product} />;
      })}
    </div>
  );
}
