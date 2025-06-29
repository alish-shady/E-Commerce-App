import { createContext, useContext, useState } from "react";
const cartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingCost, _] = useState(
    () => Math.floor(Math.random() * (50 - 20 + 1)) + 20,
  );
  function addToCart(product) {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
        get subTotal() {
          return this.quantity * this.price;
        },
      },
    ]);
  }
  function removeFromCart(id) {
    setCart(cart.filter((product) => product.id !== id));
  }
  function changeQuantity(type, id) {
    const selectedProduct = cart.findIndex((product) => product.id === id);
    const cartArr = [...cart];
    type === "inc" && cartArr[selectedProduct].quantity++;
    type === "dec" &&
      cartArr[selectedProduct].quantity > 1 &&
      cartArr[selectedProduct].quantity--;
    setCart([...cartArr]);
  }
  function productExists(id) {
    const productIds = cart.map((product) => product.id);
    const exists = !productIds.every((productId) => {
      return productId !== id;
    });
    return exists;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        shippingCost,
        addToCart,
        removeFromCart,
        changeQuantity,
        productExists,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
function useCartContext() {
  const contextValue = useContext(cartContext);
  if (contextValue === undefined)
    throw new Error(
      "CartContext is not used in the right place (inside the provider)",
    );
  return contextValue;
}
export { useCartContext, CartProvider };
