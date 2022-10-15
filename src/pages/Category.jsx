import { Link, useParams } from 'react-router-dom';
import { lowerFirst, toLink } from '../helpers/functions';
import { EcommerceContext } from '../App';
import { useContext } from 'react';
import FavoriteButton from '../components/FavoriteButton';

export default function Category({ favorites, setFavorites }) {
  const { category } = useParams();
  const [products] = useContext(EcommerceContext);
  const itemsInCurrentCategory = products.data
    .filter(product => product.category === category)
    .sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-3'>{lowerFirst(category)}</h1>
      <p className='mb-5'>{itemsInCurrentCategory.length} Products Found</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {itemsInCurrentCategory.map(product => (
          <div
            key={product.id}
            className='flex flex-col gap-3 p-3 bg-white shadow-2xl rounded-lg'
          >
            <span className='self-end'>
              <FavoriteButton
                id={product.id}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </span>
            <Link
              to={`/product/${product.id}/${toLink(product.title)}`}
              className='[&>*]:mb-3'
            >
              <img
                src={product.image}
                className='object-contain aspect-square p-1'
              />
              <p className='text-center'>{product.title}</p>
              <p className='text-center text-xl font-bold'>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
