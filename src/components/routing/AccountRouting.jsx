import { Route, Routes } from 'react-router-dom';
import Account from '../../pages/authentication/Account';
import ChangeAccountData from '../../pages/account/changeAccountData/ChangeAccountData';
import Favorites from '../../pages/account/Favorites';
import ProtectedAccountRoute from './protectors/ProtectedAccountRoute';
import AccountSidebar from '../AccountSidebar';

export default function AccountRouting({ favorites, setFavorites }) {
  return (
    <ProtectedAccountRoute>
      <div className='account-container'>
        <AccountSidebar />
        <Routes>
          <Route path='/' element={<Account />} />
          <Route path='/userdata' element={<ChangeAccountData />} />
          <Route
            path='/favorites'
            element={
              <Favorites favorites={favorites} setFavorites={setFavorites} />
            }
          />
        </Routes>
      </div>
    </ProtectedAccountRoute>
  );
}
