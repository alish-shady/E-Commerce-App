import ReturnButton from "../components/ReturnButton";
import Header from "../components/Header";
import StarRating from "../components/StarRating";
import { useProductsContext } from "../contexts/ProductsContext";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
export default function ReviewedProducts() {
  const { ratedProducts } = useProductContext();
  const { products } = useProductsContext();
  const ratedProductsIds = ratedProducts.map((pro) => {
    return pro.id;
  });
  const ratedProductsList = products.filter((product) => {
    return ratedProductsIds.includes(product.id);
  });
  return (
    <main className="text-Text1 bg-Primary mb-8 flex flex-col gap-4 px-16">
      <Header />
      <h1 className="text-2xl font-semibold">Rated Products</h1>
      {!ratedProducts.length ? (
        <div className="flex w-full flex-col items-center justify-center gap-16 py-16">
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <h1 className="text-8xl font-bold">No Reviewed Product!</h1>
            <p className="text-sm">You have not rated any product!</p>
          </div>
          <ReturnButton />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-4 text-sm">
            <div className="w-full rounded-sm py-4 shadow-sm">
              <ul className="ml-auto grid w-5/6 grid-cols-3 gap-4">
                <li className="flex w-full">Product</li>
                <li className="flex w-full">Price</li>
                <li className="flex w-full">Rating</li>
              </ul>
            </div>
            {ratedProductsList.map((product) => {
              return (
                <div className="w-full rounded-sm py-4 shadow-sm">
                  <ul className="ml-auto grid w-5/6 grid-cols-3 items-center gap-4">
                    <Link to={`/productdetail/${product.id}`}>
                      <li>
                        <div className="relative flex items-center gap-2">
                          <img
                            src={product.image}
                            className="max-h-16 max-w-8"
                          />
                          <span>{product.title}</span>
                        </div>
                      </li>
                    </Link>
                    <li className="text-Text2">${product.price}</li>
                    <li>
                      {
                        <StarRating
                          productId={product.id}
                          rating={product.rating}
                          interactive={false}
                        />
                      }
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div>
            <ReturnButton />
          </div>
        </div>
      )}
    </main>
  );
}
