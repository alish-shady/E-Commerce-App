import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetailsPage";
import Cart from "./pages/CartPage";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import NotFound from "./pages/NotFoundPage";
import SignUp from "./pages/SignUpPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <ProductsProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/productdetail/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ProductsProvider>
  );
}

export default App;
