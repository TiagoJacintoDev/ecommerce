import { Link } from 'react-router-dom';
import { toLink } from '../../helpers/functions';
import { FaShoppingCart } from 'react-icons/fa';

export default function BoughtProducts({ boughtProducts }) {
  return (
    <>
      <div>
        <p className='flex gap-2 items-center font-bold text-xs mb-5'>
          <FaShoppingCart className='text-accent' size={20} /> BOUGHT PRODUCTS
        </p>
        <div className='[&>*:not(:last-child)]:mb-10'>
          {boughtProducts.map(info => (
            <div className='border border-gray-300'>
              <p className='bg-white pt-1.5 pb-2 px-2 border-b border-gray-300'>
                Order from <strong>{info.date}</strong>
              </p>
              <div className='border border-gray-300 m-2.5 p-3 bg-white'>
                <div>
                  {info.products.map(product => (
                    <div className='grid grid-flow-col auto-cols-auto items-center gap-4'>
                      <Link
                        to={toLink(`/product/${product.id}/${product.title}`)}
                      >
                        <img
                          src={product.image}
                          className='aspect-square object-contain'
                        />
                      </Link>
                      <Link
                        to={toLink(`/product/${product.id}/${product.title}`)}
                        className='text-blue-600 hover:underline'
                      >
                        <p>{product.title}</p>
                      </Link>
                      <span className='font-bold'>${product.price}</span>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 mt-7 mb-2 justify-items-center'>
                  <ul>
                    <h4 className='font-semibold'>SHIPPING ADDRESS</h4>
                    <li>{info.selectedAddress.name}</li>
                    <li>{info.selectedAddress.address}</li>
                    <li>{info.selectedAddress.postal}</li>
                    <li>{info.selectedAddress.city}</li>
                    <li>{info.selectedAddress.country}</li>
                    <li>{info.selectedAddress.tel}</li>
                  </ul>
                  <ul>
                    <h4 className='font-semibold'>SHIPPING OPTIONS</h4>
                    <li>{info.shipping.title}</li>
                    <li>${info.shipping.price}</li>
                    <li>{info.shipping.deliveryDate}</li>
                  </ul>
                </div>
                <p className='text-end text-lg'>
                  Subtotal: <span className='font-bold'>${info.subTotal}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
