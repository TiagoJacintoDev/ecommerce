import { UserAuth } from '../../context/AuthContext';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Account() {
  const { user, logout } = UserAuth();

  return (
    <div>
      <h1 className='text-2xl font-semibold pb-2'>Account</h1>
      <p>
        This is your reserved area. Here you can manage your personal data, or
        create and manage your addresses.
      </p>
      <div className='flex items-center mt-24 mb-14'>
        <div className='grid grid-flow-col auto-cols-min h-[140px] justify-items-center'>
          <Link
            to='/account/favorites'
            className='border border-gray-300 pt-6 w-[160px] flex flex-col items-center text-center font-semibold text-gray-400 text-sm'
          >
            <AiFillHeart size={33} className='text-accent-light mb-5' />
            FAVORITES
          </Link>
          <Link
            to='/account/userdata'
            className='border border-l-0 border-gray-300 pt-6 w-[160px] flex flex-col items-center text-center font-semibold text-gray-400 text-sm'
          >
            <BsFillPersonFill size={33} className='text-accent-light mb-5' />
            CHANGE ACCOUNT DATA
          </Link>
          <Link
            to='/account/bought-products'
            className='border border-l-0 border-gray-300 pt-6 w-[160px] flex flex-col items-center text-center font-semibold text-gray-400 text-sm'
          >
            <FaShoppingCart size={33} className='text-accent-light mb-5' />
            BOUGHT PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
}
