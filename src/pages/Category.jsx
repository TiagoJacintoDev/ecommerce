import { Link, useParams } from 'react-router-dom';
import { lowerFirst, toLink } from '../helpers/functions';
import { EcommerceData } from '../context/EcommerceContext';
import FavoriteButton from '../components/FavoriteButton';

export default function Category({ favorites, setFavorites }) {
  const { category } = useParams();
  const [products] = EcommerceData();
  const itemsInCurrentCategory = products.data
    .filter(product => product.category === category)
    .sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-3'>{lowerFirst(category)}</h1>
      <p className='mb-5'>{itemsInCurrentCategory.length} Products Found</p>
      <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {itemsInCurrentCategory.map(product => (
          <div
            key={product.id}
            className='flex flex-col p-3 bg-white shadow-lg rounded-lg'
          >
            <span className='self-end'>
              <FavoriteButton
                product={product}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </span>
            <Link
              to={`/product/${product.id}/${toLink(product.title)}`}
              className='[&>*]:mb-3 flex flex-col justify-between h-full'
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
