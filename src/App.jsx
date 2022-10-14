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
import ProtectedRoute from './components/helper/ProtectedRoute';
import ChangeAccountData from './pages/changeAccountData/ChangeAccountData';
import Favorites from './pages/Favorites';
import Product from './pages/Product';

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

  const [favorites, setFavorites] = useLocalStorage();

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
                <Favorites
                  favorites={favorites}
                  setFavorites={setFavorites}
                  ecommerceData={ecommerceData}
                />
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
              ecommerceData={ecommerceData}
            />
          }
        />
        <Route
          path='/categories/:category'
          element={<Category favorites={favorites} setFavorites={setFavorites} />}
        />
      </Routes>
    </EcommerceContext.Provider>
  );
}
