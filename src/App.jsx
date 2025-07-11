import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetailsPage";
import Cart from "./pages/CartPage";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import NotFound from "./pages/NotFoundPage";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import ScrollToTop from "./components/ScrollToTop";
import { UserProvider } from "./contexts/UserContext";
import AccountPage from "./pages/AccountPage";
import ReviewedProducts from "./pages/ReviewedProductsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderConfirmation from "./pages/OrderConfirmationPage";
function App() {
  return (
    <ProductsProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/productdetail/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <AccountPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/ratedproducts"
                  element={
                    <ProtectedRoute>
                      <ReviewedProducts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <OrderConfirmation />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ProductsProvider>
  );
}

export default App;
