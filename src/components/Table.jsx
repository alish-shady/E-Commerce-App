import TableRow from "./TableRow";
export default function Table({ type, list }) {
  return (
    <div className="text-size-e flex w-full flex-col gap-4">
      <div className="w-full rounded-sm shadow-sm md:py-2 lg:py-4">
        <ul
          className={`ml-auto grid w-5/6 gap-4 ${type === "cart" ? "grid-cols-4" : "grid-cols-3"}`}
        >
          <li className="flex w-full">Product</li>
          <li className="flex w-full">Price</li>
          <li className="flex w-full">
            {type === "cart" ? "Quantity" : "Rating"}
          </li>
          {type === "cart" ? <li className="flex w-full">Subtotal</li> : null}
        </ul>
      </div>
      {list.map((product) => {
        return <TableRow key={product.id} product={product} type={type} />;
      })}
    </div>
  );
}
