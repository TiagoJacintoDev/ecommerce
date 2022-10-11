import { useState } from 'react';
import CategoriesMenu from './CategoriesMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-accent'>
      <div className='container mx-auto py-2 h-16 flex items-center justify-between'>
        <button
          onClick={() => setIsMenuOpen(true)}
          className='flex flex-col items-center text-xs font-semibold'
        >
          <GiHamburgerMenu size={32} />
          MENU
        </button>
        <Link to='/' className='h-3/4'>
          <img className='h-full' src={Logo} />
        </Link>
        {isMenuOpen && (
          <CategoriesMenu
            categories={categories}
            closeMenu={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}