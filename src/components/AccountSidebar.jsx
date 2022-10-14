import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

const ICON_SIZE = 20;

export default function AccountSidebar() {
  const { logout } = UserAuth();
  return (
    <aside>
      <ul className='flex flex-col gap-3 items-start'>
        <Link to='/account/userdata' className='flex items-center gap-2'>
          <BsFillPersonFill size={24} />
          Change Account Data
        </Link>
        <Link to='/account/bought-products' className='flex items-center gap-2'>
          <FaShoppingCart size={ICON_SIZE} />
          Bought Products
        </Link>
        <Link to='/account/favorites' className='flex items-center gap-2'>
          <AiFillHeart size={ICON_SIZE} />
          Favorites
        </Link>
        <button onClick={logout} className='flex items-center gap-2'>
          <BiLogOut size={ICON_SIZE} />
          Logout
        </button>
      </ul>
    </aside>
  );
}
