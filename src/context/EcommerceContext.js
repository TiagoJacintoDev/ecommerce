import { useQueries } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { api } from '../services/api';

const EcommerceContext = createContext();

export default function EcommerceContextProvider({ children }) {
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
      {children}
    </EcommerceContext.Provider>
  );
}

export const EcommerceData = () => {
  return useContext(EcommerceContext);
};