import Table from "../components/Table";
import CartTotal from "../components/CartTotal";
import ReturnButton from "../components/ReturnButton";
import { useCartContext } from "../contexts/CartContext";
import TableEmpty from "../components/TableEmpty";
import PageComponent from "../components/PageComponent";
export default function Cart() {
  const { cart } = useCartContext();
  return (
    <PageComponent>
      <h1 className="text-size-c font-semibold">Your Cart</h1>
      {!cart.length ? (
        <TableEmpty type="cart" />
      ) : (
        <div className="flex flex-col gap-4">
          <Table type="cart" list={cart} />
          <div>
            <ReturnButton />
          </div>
          <CartTotal />
        </div>
      )}
    </PageComponent>
  );
}
