import { useQueries } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import LoadingScreen from "../components/elements/LoadingScreen";
import axios from "axios";

const EcommerceContext = createContext();

export default function EcommerceContextProvider({ children }) {
  async function queryCategories() {
    const response = await axios.get("/categoriesApi.json");
    return response.data;
  }

  async function queryProducts() {
    const response = await axios.get("/productsApi.json");
    return response.data;
  }

  const ecommerceData = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: queryProducts,
      },
      {
        queryKey: ["categories"],
        queryFn: queryCategories,
      },
    ],
  });

  if (ecommerceData[0].isLoading) return <LoadingScreen />;
  if (ecommerceData[1].isLoading) return <LoadingScreen />;

  return (
    <EcommerceContext.Provider value={ecommerceData}>
      {children}
    </EcommerceContext.Provider>
  );
}

export const EcommerceData = () => {
  return useContext(EcommerceContext);
};
