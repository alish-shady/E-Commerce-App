export default function ProductCard({ product }) {
  const { title, price, category, image } = product;
  return (
    <div
      title={title}
      className="flex aspect-square h-full w-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex w-full items-center justify-center py-4">
        <img
          src={image}
          className="size-36 rounded-md border border-gray-200 shadow-inner"
        />
      </div>
      <h2 className="truncate text-xs font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">
        Price: <span className="font-medium text-gray-900">${price}</span>
      </p>
      <div className="text-xs tracking-wide text-gray-500 uppercase">
        {category}
      </div>
    </div>
  );
}
