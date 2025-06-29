import { MdCategory } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { useProductsContext } from "../contexts/ProductsContext";
import LoadingDots from "./LoadingDots";
import { useSearchParams } from "react-router-dom";
import RadioButton from "./RadioButton";
export default function SortandFilter() {
  const { products, isLoading } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );
  const icons = {
    "men's clothing": <IoMdMale />,
    "women's clothing": <IoMdFemale />,
    jewelery: <IoDiamond />,
    electronics: <FaMicrochip />,
  };
  const filteredCategory = searchParams.get("filter");
  const sortBy = searchParams.get("sortBy");
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
              {
                <RadioButton
                  param={!filteredCategory}
                  callBack={() =>
                    setSearchParams((prev) => {
                      prev.delete("filter");
                      return prev;
                    })
                  }
                  text="All categories"
                  icon={<MdCategory />}
                />
              }
              {categories.map((cat) => {
                return (
                  <RadioButton
                    param={filteredCategory === cat}
                    callBack={() =>
                      setSearchParams((prev) => {
                        prev.set("filter", cat);
                        return prev;
                      })
                    }
                    text={cat.slice(0, 1).toUpperCase().concat(cat.slice(1))}
                    icon={icons[cat] && icons[cat]}
                    key={cat}
                  />
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
            <RadioButton
              param={!sortBy}
              callBack={() =>
                setSearchParams((prev) => {
                  prev.delete("sortBy");
                  return prev;
                })
              }
              text="Sort by Default"
            />
            <RadioButton
              param={sortBy === "price-asc"}
              callBack={() =>
                setSearchParams((prev) => {
                  prev.set("sortBy", "price-asc");
                  return prev;
                })
              }
              text="Sort by Pricing"
              icon={<FaArrowUpLong />}
            />
            <RadioButton
              param={sortBy === "price-desc"}
              callBack={() =>
                setSearchParams((prev) => {
                  prev.set("sortBy", "price-desc");
                  return prev;
                })
              }
              text="Sort by Pricing"
              icon={<FaArrowDownLong />}
            />
          </>
        )}
      </div>
    </aside>
  );
}
