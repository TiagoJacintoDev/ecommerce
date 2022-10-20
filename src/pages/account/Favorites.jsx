import AccountSidebar from '../../components/AccountSidebar';
import { AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites({ favorites, setFavorites }) {
  const [page, setPage] = useState(1);
  const maxPages = Math.ceil(favorites.length / 5);
  const pages = [];

  for (let i = 1; i <= maxPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <div>
        <p className='flex gap-2 items-center font-bold text-xs'>
          <AiFillHeart className='text-accent' size={20} /> FAVORITES
        </p>
        {favorites.map((product, index) =>
          index >= page * 5 - 5 && index < page * 5 ? (
            <div
              key={product.id}
              className='grid grid-flow-col border-b gap-5 items-center py-5 sm:p-5'
            >
              <Link>
                <img
                  src={product.image}
                  className='aspect-[4/3] object-contain'
                />
              </Link>
              <div>
                <Link>{product.title}</Link>
                <p>{product.price}</p>
              </div>
              <button
                onClick={() => {
                  setFavorites(lastState =>
                    lastState.filter(fav => fav.id !== product.id)
                  );
                }}
              >
                <RiDeleteBin2Fill size={20} />
              </button>
            </div>
          ) : (
            <></>
          )
        )}
        <div className='flex justify-between mt-10'>
          <button
            onClick={() => setFavorites([])}
            className='flex gap-2 items-center py-2 px-5 border border-gray-400'
          >
            <RiDeleteBin2Fill size={20} /> Delete All
          </button>
          <div className='flex gap-4 items-center'>
            {page > 1 && (
              <button
                onClick={() => setPage(lastPage => lastPage - 1)}
                className='pagination-button bg-gray-300 text-gray-500'
              >
                {'<'}
              </button>
            )}
            {pages.map(pageN => (
              <button
                key={pageN}
                onClick={() => setPage(page)}
                className={
                  pageN === page
                    ? 'pagination-button text-white bg-accent'
                    : 'pagination-button bg-gray-300 text-gray-500'
                }
              >
                {pageN}
              </button>
            ))}
            {page < maxPages && (
              <button
                onClick={() => setPage(lastPage => lastPage + 1)}
                className='pagination-button bg-gray-300 text-gray-500'
              >
                {'>'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
