import { useContext, useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../App';
import { getRandomProducts } from '../helpers/functions';

export default function SearchBarMenu({ closeSearchMenu, history }) {
  const [products] = useContext(EcommerceContext);

  const cloneProducts = [...products.data];

  const tenHighestRatedProducts = useMemo(
    () =>
      cloneProducts
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .filter((p, index) => index < 10),
    []
  );

  const firstFiveHistoryItems = useMemo(
    () => history.filter((h, index) => index < 5),
    [history]
  );
  const fiveRandomProducts = useMemo(() => getRandomProducts(products, 5), []);

  return (
    <>
      <div
        className='fixed bg-[rgba(0,0,0,0.5)] left-0 w-[100vw] h-[300vw] -z-10'
        onClick={closeSearchMenu}
      />
      <div className='container left-1/2 -translate-x-1/2 absolute top-full p-5 z-10 bg-white rounded-b-xl border border-accent'>
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
      </div>
    </>
  );
}
