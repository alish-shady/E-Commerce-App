import { MdCategory } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { useProductsContext } from "../contexts/ProductsContext";
import LoadingDots from "./LoadingDots";
export default function SortandFilter() {
  const {
    products,
    alterFilter,
    alterSorting,
    isLoading,
    filteredCategory,
    sortBy,
  } = useProductsContext();
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );
  const icons = {
    "men's clothing": <IoMdMale />,
    "women's clothing": <IoMdFemale />,
    jewelery: <IoDiamond />,
    electronics: <FaMicrochip />,
  };
  function RadioMark({ active }) {
    return (
      <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full border">
        {active && <div className="h-5/6 w-5/6 rounded-full bg-gray-500" />}
      </div>
    );
  }
  return (
    <aside className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 border-b border-b-gray-200 pb-2">
        <h2 className="text-2xl text-nowrap">Filtering by Category</h2>
        <div className="ml-2 flex flex-col gap-2">
          {isLoading ? (
            <div className="w-full">
              <LoadingDots />
            </div>
          ) : (
            <>
              <div
                className={`flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200 ${
                  filteredCategory === "" && "border-gray-600"
                }`}
                onClick={() => alterFilter("")}
              >
                <MdCategory />
                <span>All categories</span>
                <RadioMark active={filteredCategory === ""} />
              </div>
              {categories.map((cat) => {
                return (
                  <div
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200 ${
                      filteredCategory === cat && "border-gray-600"
                    }`}
                    onClick={() => alterFilter(cat)}
                    key={cat}
                  >
                    {icons[cat] && icons[cat]}
                    <span>
                      {cat.slice(0, 1).toUpperCase().concat(cat.slice(1))}
                    </span>
                    <RadioMark active={filteredCategory === cat} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-nowrap">Sorting Options</h2>
        {isLoading ? (
          <div className="w-full">
            <LoadingDots />
          </div>
        ) : (
          <>
            <div
              className={`flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200 ${
                sortBy === "price-asc" && "border-gray-600"
              }`}
              onClick={() => alterSorting("price-asc")}
            >
              <span>Sort by Pricing:</span>
              <FaArrowUpLong />
              <RadioMark active={sortBy === "price-asc"} />
            </div>
            <div
              className={`flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200 ${
                sortBy === "price-desc" && "border-gray-600"
              }`}
              onClick={() => alterSorting("price-desc")}
            >
              <span>Sort by Pricing:</span>
              <FaArrowDownLong />
              <RadioMark active={sortBy === "price-desc"} />
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200">
              <span>Sort by Rating</span>
              <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full border"></div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
