import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../../../App';
import { AiOutlineSearch } from 'react-icons/ai';
import { lowerFirst } from '../../../helpers/functions';
import NoResultsFound from './NoResultsFound';

export default function SearchingMenu({ search }) {
  const [products] = useContext(EcommerceContext);

  const highestRatedProducts = products.data
    .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 7);

  const categories = highestRatedProducts.map(product => product.category);
  const mostCommonCategory = categories
    .sort(
      (a, b) =>
        categories.filter(category => category === a).length -
        categories.filter(category => category === b).length
    )
    .pop();

  const filteredProducts = products.data
    .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5);

  if (
    products.data.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    ).length === 0
  ) {
    return <NoResultsFound search={search} />;
  }

  return (
    <>
      <div>
        <div className='font-semibold'>SEARCH SUGGESTIONS</div>
        <div className='font-bold'>"{search}"</div>
        <Link
          to={`/category/${mostCommonCategory}`}
          className='search-link ml-4 hover:font-semibold'
        >
          In {lowerFirst(mostCommonCategory)}
        </Link>
        {highestRatedProducts.map(product => (
          <Link
            to={`/products/${product.title}`}
            key={product.id}
            className='search-link'
          >
            <AiOutlineSearch style={{ minHeight: '20px', minWidth: '20px' }} />
            <h1>{product.title}</h1>
          </Link>
        ))}
        <Link
          className='search-link text-gray-600 font-semibold hover:text-gray-600'
          to={`/search/${search}`}
        >
          See all results for "{search}"
        </Link>
      </div>
      <div className='[&>*:not(:last-child)]:mb-10'>
        {filteredProducts.map(product => (
          <div key={product.id} className='flex gap-6 items-center'>
            <Link to={`/products/${product.title}`}>
              <img src={product.image} className='max-h-20' />
            </Link>
            <div className='flex flex-col'>
              <Link
                to={`/products/${product.title}`}
                className='hover:underline hover:text-blue-700'
              >
                {product.title}
              </Link>
              <span className='font-bold'>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
