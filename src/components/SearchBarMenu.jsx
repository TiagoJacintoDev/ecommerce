import { useContext, useMemo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../App';
import { getRandomProducts } from '../helpers/functions';

export default function SearchBarMenu({ closeSearchMenu }) {
  const [products] = useContext(EcommerceContext);

  const tenRandomProducts = useMemo(() => getRandomProducts(products, 10), []);
  const fiveRandomProducts = useMemo(() => getRandomProducts(products, 5), []);

  return (
    <>
      <div
        className='fixed bg-[rgba(0,0,0,0.5)] left-0 w-[100vw] h-[300vw] -z-10'
        onClick={closeSearchMenu}
      />
      <div className='container left-1/2 -translate-x-1/2 absolute top-full p-5 z-10 bg-white'>
        <div className='font-semibold'>POPULAR SEARCHES</div>
        <div className='grid grid-flow-col auto-cols-fr gap-10'>
          <div>
            {tenRandomProducts.map(product => (
              <div key={product.id} className='flex items-center gap-2'>
                <AiOutlineSearch size={20} /> <h1>{product.title}</h1>
              </div>
            ))}
          </div>
          <div className='[&>*:not(:last-child)]:mb-10'>
            {fiveRandomProducts.map(product => (
              <div key={product.id} className='flex gap-6 items-center'>
                <img className='max-h-20' src={product.image} />
                <div className='flex flex-col'>
                  <Link
                    onClick={closeSearchMenu}
                    to={`/products/${product.title}`}
                    className='hover:underline hover:text-blue-500'
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
