import { Route, Routes } from "react-router-dom";
import Account from "../../pages/authentication/Account";
import ChangeAccountData from "../../pages/account/changeAccountData/ChangeAccountData";
import Favorites from "../../pages/account/Favorites";
import ProtectedAccountRoute from "./protectors/ProtectedAccountRoute";
import AccountSidebar from "../AccountSidebar";
import BoughtProducts from "../../pages/account/BoughtProducts";
import { useMediaQuery } from "react-responsive";
import { deviceSizes as ds } from "../../helpers/variables";

export default function AccountRouting({
  boughtProducts,
  favorites,
  setFavorites,
}) {
  const isLaptop = useMediaQuery({ query: `(min-width: ${ds.md})` });

  return (
    <ProtectedAccountRoute>
      <div className="account-container">
        <AccountSidebar />
        <Routes>
          <Route path="/" element={isLaptop && <Account />} />
          <Route path="/userdata" element={<ChangeAccountData />} />
          <Route
            path="/bought-products"
            element={<BoughtProducts boughtProducts={boughtProducts} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} setFavorites={setFavorites} />
            }
          />
        </Routes>
      </div>
    </ProtectedAccountRoute>
  );
}
