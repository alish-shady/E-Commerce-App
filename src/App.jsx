import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import ScrollToTop from "./components/ScrollToTop";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import LoadingFullPage from "./pages/LoadingFullPage";
import ContactUs from "./pages/ContactUsPage";
import AboutUs from "./pages/AboutUsPage";
const ProductDetails = lazy(() => import("./pages/ProductDetailsPage"));
const Cart = lazy(() => import("./pages/CartPage"));
const SignUp = lazy(() => import("./pages/SignUpPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Account = lazy(() => import("./pages/AccountPage"));
const ReviewedProducts = lazy(() => import("./pages/ReviewedProductsPage"));
const OrderConfirmation = lazy(() => import("./pages/OrderConfirmationPage"));
export default function App() {
  return (
    <ProductsProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <Suspense fallback={<LoadingFullPage />}>
                <ScrollToTop />
                <Routes>
                  <Route index path="/" element={<HomePage />} />
                  <Route
                    path="/productdetail/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <Account />
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
              </Suspense>
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ProductsProvider>
  );
}
