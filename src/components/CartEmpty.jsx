import ReturnButton from "./ReturnButton";

export default function CartEmpty() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="text-8xl font-bold">Cart is Empty!</h1>
        <p className="text-sm">You have not picked any product to buy!</p>
      </div>
      <ReturnButton />
    </div>
  );
}
