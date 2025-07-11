import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderConfirmed from "../components/OrderConfirmation";
import { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
export default function OrderConfirmation() {
  const { emptyCart } = useCartContext();
  useEffect(() => {
    emptyCart();
  }, [emptyCart]);
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <div className="flex w-full items-center justify-center">
          <OrderConfirmed />
        </div>
      </main>
      <Footer />
    </>
  );
}
