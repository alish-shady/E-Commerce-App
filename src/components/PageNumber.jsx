import { useProductsContext } from "../contexts/ProductsContext";

export default function PageNumber({ i }) {
  const { goToPage } = useProductsContext();
  return (
    <button
      onClick={() => goToPage(i + 1)}
      className="hover:bg-Secondary bg-Primary border-Secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border duration-200"
    >
      {i + 1}
    </button>
  );
}
