import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export default function CartTotal() {
  const { cart, shippingCost } = useCartContext();
  const subTotal = cart.reduce((acc, product) => acc + product.subTotal, 0);
  const navigate = useNavigate();
  return (
    <div className="text-size-e flex flex-col gap-2 rounded-md border px-4 py-6 md:mx-auto md:w-max lg:mr-0 lg:ml-auto lg:w-1/4">
      <h2 className="text-size-d font-medium">Cart Total</h2>
      <div>
        <div className="flex justify-between py-2">
          <span>Subtotal:</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="border-y-Text2 flex justify-between border-y py-2">
          <span>Shipping:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Total:</span>
          <span>${(subTotal + shippingCost).toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className="border-Text2 hover:text-Text hover:bg-Text2 m-auto w-max cursor-pointer rounded-md border-2 p-2 transition-all duration-200"
      >
        Proceed to checkout
      </button>
    </div>
  );
}
