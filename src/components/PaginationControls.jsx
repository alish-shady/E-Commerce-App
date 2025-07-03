import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useProductsContext } from "../contexts/ProductsContext";
import PageNumber from "./PageNumber";
export default function PaginationControls({ pages, results }) {
  const { currentPage, movePage, productsPerPage } = useProductsContext();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="flex w-full items-center justify-center gap-4">
        <button
          className={`bg-Secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl duration-200 ${currentPage <= 1 ? "opacity-40" : "opacity-100"}`}
          onClick={() => movePage("left")}
          disabled={currentPage <= 1}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        {Array.from({ length: pages }, (v, i) => {
          return <PageNumber i={i} key={i} />;
        })}
        <button
          className={`bg-Secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl duration-200 ${currentPage >= pages ? "opacity-40" : "opacity-100"}`}
          onClick={() => movePage("right")}
          disabled={currentPage >= pages}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
      <div>
        <span className="text-Text2 text-sm">
          Showing{" "}
          {`${(currentPage - 1) * productsPerPage + 1}-${Math.min(currentPage * productsPerPage, results.length)} of
          ${results.length} `}
          results
        </span>
      </div>
    </div>
  );
}
