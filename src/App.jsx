import { useLocalStorage } from "./hooks/useLocalStorage";
import { useSessionStorage } from "./hooks/useSessionStorage";
import { Route, Routes, useMatch } from "react-router-dom";

import Header from "./components/elements/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Cart from "./pages/checkout/Cart";
import Product from "./pages/Product";
import AccountRouting from "./components/routing/AccountRouting";
import CheckoutRouting from "./components/routing/CheckoutRouting";
import ProtectedAuthRoute from "./components/routing/protectors/ProtectedAuthRoute";
import Footer from "./components/elements/Footer";

export default function App() {
  const [cart, setCart] = useLocalStorage("cart");
  const [favorites, setFavorites] = useLocalStorage("favorites");
  const [addresses, setAddresses] = useLocalStorage("addresses");
  const [boughtProducts, setBoughtProducts] = useLocalStorage("boughtProducts");

  const [shipping, setShipping] = useSessionStorage();

  const checkoutPath = useMatch({ path: "/checkout", end: false });

  return (
    <div className="pt-24 bg-light-gray">
      {(!checkoutPath || Object.keys(checkoutPath).length === 0) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedAuthRoute>
              <SignUp />
            </ProtectedAuthRoute>
          }
        />

        <Route
          path="/account/*"
          element={
            <AccountRouting
              boughtProducts={boughtProducts}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/categories/:category"
          element={
            <Category favorites={favorites} setFavorites={setFavorites} />
          }
        />

        <Route
          path="/product/:id/:product"
          element={
            <Product
              favorites={favorites}
              cart={cart}
              setFavorites={setFavorites}
              setCart={setCart}
            />
          }
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route
          path="/checkout/*"
          element={
            <CheckoutRouting
              addresses={addresses}
              setAddresses={setAddresses}
              cart={cart}
              setCart={setCart}
              shipping={shipping}
              setShipping={setShipping}
              setBoughtProducts={setBoughtProducts}
            />
          }
        />
      </Routes>
      {(!checkoutPath || Object.keys(checkoutPath).length === 0) && <Footer />}
    </div>
  );
}
