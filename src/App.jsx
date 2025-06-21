import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { ProductsProvider } from "./contexts/ProductsContext";
import LoadingDots from "./components/LoadingDots";
function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loading" element={<LoadingDots />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
