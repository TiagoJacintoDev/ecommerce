import { useLocalStorage } from './hooks/useLocalStorage';
import { useSessionStorage } from './hooks/useSessionStorage';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Cart from './pages/checkout/Cart';
import Product from './pages/Product';
import AccountRouting from './components/routing/AccountRouting';
import CheckoutRouting from './components/routing/CheckoutRouting';
import ProtectedAuthRoute from './components/routing/protectors/ProtectedAuth';

export default function App() {
  const [cart, setCart] = useLocalStorage('cart');
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [addresses, setAddresses] = useLocalStorage('addresses');
  const [boughtProducts, setBoughtProducts] = useLocalStorage('boughtProducts');

  const [shipping, setShipping] = useSessionStorage();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <ProtectedAuthRoute>
              <SignUp />
            </ProtectedAuthRoute>
          }
        />

        <Route
          path='/account/*'
          element={
            <AccountRouting favorites={favorites} setFavorites={setFavorites} />
          }
        />

        <Route
          path='/categories/:category'
          element={
            <Category favorites={favorites} setFavorites={setFavorites} />
          }
        />

        <Route
          path='/product/:id/:product'
          element={
            <Product
              favorites={favorites}
              setFavorites={setFavorites}
              setCart={setCart}
            />
          }
        />

        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

        <Route
          path='/checkout/*'
          element={
            <CheckoutRouting
              addresses={addresses}
              setAddresses={setAddresses}
              cart={cart}
              setCart={setCart}
              shipping={shipping}
              setShipping={setShipping}
            />
          }
        />
      </Routes>
    </>
  );
}
