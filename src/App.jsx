import { useQueries } from '@tanstack/react-query';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Account from './pages/authentication/Account';
import { api } from './services/api';
import ProtectedRoute from './components/helper/ProtectedRoute';

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
              <Account />
            </ProtectedRoute>
          }
        />

        <Route path='/categories/:category' element={<Category />} />
      </Routes>
    </EcommerceContext.Provider>
  );
}
