import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';

export default function CheckoutHeader({ pageTitle }) {
  return (
    <div className='bg-accent fixed w-screen top-0'>
      <div className='container mx-auto h-14 flex items-center justify-between'>
        <Link to={-1} className='flex items-center gap-2'>
          <AiOutlineLeft size={20} />
          <span>{pageTitle}</span>
        </Link>
        <Link to='/cart'>
          <FaShoppingCart size={33} />
        </Link>
      </div>
    </div>
  );
}
