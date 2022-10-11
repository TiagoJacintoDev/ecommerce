import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useMemo, useState } from 'react';
import { EcommerceContext } from '../../../App';
import { getRandomProducts } from '../../../helpers/functions';

export default function InitialMenu({ closeSearchMenu, history }) {
  const [products] = useContext(EcommerceContext);

  const firstFiveHistoryItems = useMemo(
    () => history.filter((h, index) => index < 5),
    [history]
  );

  const cloneProducts = [...products.data];
  const fiveRandomProducts = useMemo(() => getRandomProducts(products, 5), []);
  const tenHighestRatedProducts = useMemo(
    () =>
      cloneProducts
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .filter((p, index) => index < 10),
    []
  );

  return (
    <>
      <div className='font-semibold pb-3'>HIGHEST RATED PRODUCTS</div>
      <div className='grid grid-flow-col auto-cols-fr gap-10'>
        <div>
          {tenHighestRatedProducts.map(product => (
            <Link
              to={`/products/${product.title}`}
              key={product.id}
              className='flex gap-2 items-center hover:bg-gray-100 hover:text-blue-700 hover:underline p-2'
            >
              <AiOutlineSearch style={{ minHeight: '20px', minWidth: '20px' }} />
              <h1>{product.title}</h1>
            </Link>
          ))}
          <div>
            <div className='flex justify-between items-center mt-2'>
              <div className='font-semibold'>SEARCH HISTORY</div>
              <button className='underline'>Clean History</button>
            </div>
            <ul>
              {firstFiveHistoryItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='[&>*:not(:last-child)]:mb-10'>
          {fiveRandomProducts.map(product => (
            <div key={product.id} className='flex gap-6 items-center'>
              <Link onClick={closeSearchMenu} to={`/products/${product.title}`}>
                <img className='max-h-20' src={product.image} />
              </Link>
              <div className='flex flex-col'>
                <Link
                  onClick={closeSearchMenu}
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
      </div>
    </>
  );
}