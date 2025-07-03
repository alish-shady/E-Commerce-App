import { useCartContext } from "../contexts/CartContext";

export default function CartTotal() {
  const { cart, shippingCost } = useCartContext();
  const subTotal = cart.reduce((acc, product) => acc + product.subTotal, 0);
  return (
    <div className="ml-auto flex w-1/4 flex-col gap-2 rounded-md border px-4 py-6 text-sm">
      <h2 className="text-base font-medium">Cart Total</h2>
      <div>
        <div className="flex justify-between py-2">
          <span>Subtotal:</span>
          <span>${subTotal}</span>
        </div>
        <div className="border-y-Text2 flex justify-between border-y py-2">
          <span>Shipping:</span>
          <span>${shippingCost}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Total:</span>
          <span>${subTotal + shippingCost}</span>
        </div>
      </div>
      <button className="border-Text2 hover:text-Text hover:bg-Text2 m-auto w-3/4 cursor-pointer rounded-md border-2 p-2 text-sm transition-all duration-200">
        Proceed to checkout
      </button>
    </div>
  );
}
