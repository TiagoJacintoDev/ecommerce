import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import SearchBarMenuModal from './SearchBarMenu';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function SearchBar() {
  const [isSearchBarMenuOpen, setIsMenuSearchBarOpen] = useState(false);
  const [history, setHistory] = useLocalStorage();
  const [search, setSearch] = useState('');

  function addSearchToHistory() {
    setHistory(lastHistory => [search, ...lastHistory]);
    setSearch('');
  }

  return (
    <>
      <div className='relative'>
        <form
          onSubmit={e => {
            e.preventDefault();
            addSearchToHistory();
          }}
        >
          <input
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search for a product, brand or reference...'
            className='rounded-3xl py-1.5 pl-3 outline-none w-80'
            onFocus={() => setIsMenuSearchBarOpen(true)}
          />
        </form>
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
        <SearchBarMenuModal
          history={history}
          closeSearchMenu={() => setIsMenuSearchBarOpen(false)}
        />
      )}
    </>
  );
}
