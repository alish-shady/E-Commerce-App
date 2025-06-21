import { useProductsContext } from "../contexts/ProductsContext";

export default function PageNumber({ i }) {
  const { goToPage } = useProductsContext();
  return (
    <button
      onClick={() => goToPage(i + 1)}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-200 text-gray-700 duration-200 hover:bg-gray-300"
    >
      {i + 1}
    </button>
  );
}
