import AccountSidebar from '../../../components/AccountSidebar';
import { AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites({ favorites, setFavorites, ecommerceData }) {
  const favoriteProducts = useMemo(() =>
    ecommerceData[0].data.filter(product =>
      favorites.some(fav => fav === product.id)
    )
  );
  return (
    <>
      <AccountSidebar />
      <div>
        <p className='flex gap-2 items-center font-bold text-xs'>
          <AiFillHeart className='text-accent' size={20} /> FAVORITES
        </p>
        {favoriteProducts.map(product => (
          <div
            key={product.id}
            className='grid grid-flow-col border-b gap-5 items-center p-5'
          >
            <Link>
              <img src={product.image} className='aspect-[4/3] object-contain' />
            </Link>
            <div>
              <Link>{product.title}</Link>
              <p>{product.price}</p>
            </div>
            <button
              onClick={() =>
                setFavorites(lastState =>
                  lastState.filter(fav => fav !== product.id)
                )
              }
            >
              <RiDeleteBin2Fill size={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
