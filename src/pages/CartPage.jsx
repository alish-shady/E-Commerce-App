import CartTable from "../components/CartTable";
import Header from "../components/Header";
import CartTotal from "../components/CartTotal";
import ReturnButton from "../components/ReturnButton";
import { useCartContext } from "../contexts/CartContext";
import CartEmpty from "../components/CartEmpty";
export default function Cart() {
  const { cart } = useCartContext();
  return (
    <main className="text-Text1 bg-Primary mb-8 flex flex-col gap-4 px-16">
      <Header />
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {!cart.length ? (
        <CartEmpty />
      ) : (
        <div className="flex flex-col gap-4">
          <CartTable />
          <div>
            <ReturnButton />
          </div>
          <CartTotal />
        </div>
      )}
    </main>
  );
}
