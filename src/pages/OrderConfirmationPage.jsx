import OrderConfirmed from "../components/OrderConfirmation";
import { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
import PageComponent from "../components/PageComponent";
export default function OrderConfirmation() {
  const { emptyCart } = useCartContext();
  useEffect(() => {
    emptyCart();
  }, [emptyCart]);
  return (
    <PageComponent>
      <div className="flex w-full items-center justify-center">
        <OrderConfirmed />
      </div>
    </PageComponent>
  );
}
