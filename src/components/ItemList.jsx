import ItemCard from "../components/ItemCard";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
export default function ItemList({ category, listName, currentProductId }) {
  const listContainer = useRef(null);
  const relatedProducts = useProductsContext().products.filter((product) => {
    return product.category === category && currentProductId !== product.id;
  });
  const [isOverflowing, setIsOverflowing] = useState(false);
  useEffect(() => {
    checkOverFlow();
    window.addEventListener("resize", checkOverFlow);
    return () => window.removeEventListener("resize", checkOverFlow);
  }, []);
  function checkOverFlow() {
    const container = listContainer.current;
    if (container) {
      setIsOverflowing(container.scrollWidth > container.clientWidth);
    }
  }

  function scrollList(e, dir) {
    e.preventDefault();
    const scrollAmount = getComputedStyle(
      listContainer.current.children[0],
    ).width;
    if (dir === "left") {
      console.log(Number(scrollAmount.slice(0, -2)));
      listContainer.current.scrollBy({
        left: -Number(scrollAmount.slice(0, -2)),
        behavior: "smooth",
      });
    }
    if (dir === "right") {
      listContainer.current.scrollBy({
        left: Number(scrollAmount.slice(0, -2)),
        behavior: "smooth",
      });
    }
  }
  return (
    <section>
      <div className="relative flex w-full items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl">
          <MdCategory />
          {listName}
        </h2>
        {isOverflowing && (
          <div className="absolute left-1/2 flex -translate-x-1/2 transform gap-8">
            <button
              onClick={(e) => scrollList(e, "left")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition-colors duration-200 hover:bg-gray-400"
            >
              <MdOutlineKeyboardArrowLeft className="text-lg" />
            </button>
            <button
              onClick={(e) => scrollList(e, "right")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition-colors duration-200 hover:bg-gray-400"
            >
              <MdOutlineKeyboardArrowRight className="text-lg" />
            </button>
          </div>
        )}
      </div>
      <div
        className="scrollbar-hide flex w-full snap-x gap-8 overflow-x-auto scroll-smooth p-4"
        ref={listContainer}
      >
        {relatedProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
