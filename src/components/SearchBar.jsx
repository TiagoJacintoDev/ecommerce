import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import SearchBarMenuModal from './SearchBarMenu';

export default function SearchBar() {
  const [isSearchBarMenuOpen, setIsMenuSearchBarOpen] = useState(false);
  return (
    <>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search for a product, brand or reference...'
          className='rounded-3xl py-1.5 pl-3 outline-none w-80'
          onFocus={() => setIsMenuSearchBarOpen(true)}
        />
        <div className='bg-white absolute right-1 top-1/2 -translate-y-1/2 flex gap-2 items-center'>
          <AiOutlineClose
            onClick={() => setIsMenuSearchBarOpen(false)}
            className='cursor-pointer'
            size={20}
          />

          <AiOutlineSearch
            className='bg-black rounded-full p-[0.15rem] cursor-pointer hover:bg-accent'
            size={25}
            color={'white'}
          />
        </div>
      </div>
      {isSearchBarMenuOpen && (
        <SearchBarMenuModal closeSearchMenu={() => setIsMenuSearchBarOpen(false)} />
      )}
    </>
  );
}
