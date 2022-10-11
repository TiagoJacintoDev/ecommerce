import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CategoriesMenu({ categories, closeMenu }) {
  return (
    <div className='absolute w-64 top-0 left-0 bg-dark-blue text-white p-8 rounded-lg'>
      <div className='flex justify-between items-center mb-2 font-semibold'>
        MENU
        <button onClick={closeMenu}>
          <AiOutlineClose size={20} />
        </button>
      </div>
      <ul className='flex flex-col items-center'>
        {categories.map(category => (
          <li className='my-2' key={category.id}>
            <Link
              onClick={closeMenu}
              to={`/categories/${category.name.toLowerCase()}`}
            >
              <button className='hover:underline'>{category.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
