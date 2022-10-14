import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EcommerceContext } from '../App';
import { lowerFirst } from '../helpers/functions';

export default function CategoriesMenu({ closeMenu }) {
  const [, categories] = useContext(EcommerceContext);
  return (
    <div className='absolute w-64 top-2 left-2 bg-white p-8 rounded-lg border-2 border-black'>
      <div className='flex justify-between items-center mb-2 font-semibold'>
        MENU
        <button onClick={closeMenu}>
          <AiOutlineClose className='hover:text-accent' size={20} />
        </button>
      </div>
      <ul className='flex flex-col items-center'>
        {categories.data.map(category => (
          <li className='my-2' key={category}>
            <Link onClick={closeMenu} to={`/categories/${category.toLowerCase()}`}>
              <button className='hover:underline hover:text-accent'>
                {lowerFirst(category)}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
