import { Link, useParams } from 'react-router-dom';
import { LowerFirst } from '../helpers/functions';
import { EcommerceContext } from '../App';
import { useContext, useMemo } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function Category({ favorites, setFavorites }) {
  const { category } = useParams();
  const [products] = useContext(EcommerceContext);
  const itemsInCurrentCategory = useMemo(() =>
    products.data
      .filter(product => product.category === category)
      .sort((a, b) => b.rating.rate - a.rating.rate)
  );
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-3'>{LowerFirst(category)}</h1>
      <p className='mb-5'>{itemsInCurrentCategory.length} Products Found</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {itemsInCurrentCategory.map(item => (
          <div
            id={item.id}
            className='flex flex-col gap-3 p-3 bg-white shadow-2xl rounded-lg'
          >
            {favorites.includes(item.id) ? (
              <AiFillHeart
                onClick={() =>
                  setFavorites(lastState => lastState.filter(fav => fav !== item.id))
                }
                size={25}
                className='text-accent cursor-pointer self-end'
              />
            ) : (
              <AiOutlineHeart
                onClick={() => setFavorites(lastState => [...lastState, item.id])}
                size={25}
                className='text-accent cursor-pointer self-end'
              />
            )}
            <Link className='[&>*]:mb-3'>
              <img src={item.image} className='object-contain aspect-square p-1' />
              <p className='text-center'>{item.title}</p>
              <p className='text-center text-xl font-bold'>${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
