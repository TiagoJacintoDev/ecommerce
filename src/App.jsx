import { useQueries } from '@tanstack/react-query';
import { useLocalStorage } from './hooks/useLocalStorage';
import { createContext } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import { api } from './services/api';
import Header from './components/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Account from './pages/authentication/Account';
import Cart from './pages/checkout/Cart';
import ProtectedRoute from './components/helper/ProtectedRoute';
import ChangeAccountData from './pages/changeAccountData/ChangeAccountData';
import Favorites from './pages/Favorites';
import Product from './pages/Product';
import Delivery from './pages/checkout/Delivery';
import Shipping from './pages/checkout/Shipping';

export const EcommerceContext = createContext();

export default function App() {
  async function queryCategories() {
    const response = await api.get('/products/categories');
    return response.data;
  }

  async function queryProducts() {
    const response = await api.get('products');
    return response.data;
  }

  const ecommerceData = useQueries({
    queries: [
      {
        queryKey: ['products'],
        queryFn: queryProducts,
      },
      {
        queryKey: ['categories'],
        queryFn: queryCategories,
      },
    ],
  });

  const [cart, setCart] = useLocalStorage('cart');
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [addresses, setAddresses] = useLocalStorage('address');

  if (ecommerceData[0].isLoading || ecommerceData[1].isLoading)
    return <h1>Loading...</h1>;

  return (
    <EcommerceContext.Provider value={ecommerceData}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/account'
          element={
            <ProtectedRoute>
              <div className='account-container'>
                <Account />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path='/account/userdata'
          element={
            <ProtectedRoute>
              <div className='account-container'>
                <ChangeAccountData />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path='/account/favorites'
          element={
            <ProtectedRoute>
              <div className='account-container'>
                <Favorites favorites={favorites} setFavorites={setFavorites} />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path='/product/:id/:product'
          element={
            <Product
              favorites={favorites}
              setFavorites={setFavorites}
              setCart={setCart}
              ecommerceData={ecommerceData}
            />
          }
        />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path='/checkout/delivery'
          element={
            <Delivery
              addresses={addresses}
              setAddresses={setAddresses}
              cart={cart}
            />
          }
        />
        <Route path='/checkout/shipping' element={<Shipping cart={cart} />} />
        <Route
          path='/categories/:category'
          element={
            <Category favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </EcommerceContext.Provider>
  );
}
