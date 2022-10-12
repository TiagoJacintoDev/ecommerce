import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/logo.png';
import CategoriesMenu from './CategoriesMenu';
import SearchBar from './SearchBar/SearchBar';
import { deviceSizes as ds } from '../helpers/variables';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ categories, products }) {
  const isLaptop = useMediaQuery({ query: `(min-width: ${ds.md})` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-accent relative'>
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
        {isLaptop && <SearchBar />}
        {isMenuOpen && <CategoriesMenu closeMenu={() => setIsMenuOpen(false)} />}
      </div>
    </div>
  );
}
