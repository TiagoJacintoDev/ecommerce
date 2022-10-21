import { Link } from 'react-router-dom';
import CheckoutProducts from '../../components/CheckoutProducts';
import { useEffect, useRef } from 'react';

export default function Success({
  cart,
  addresses,
  shipping,
  clearCart,
  clearShipping,
}) {
  const selectedAddress = addresses.find(address => address.selected);

  useEffect(() => {
    return () => {
      clearCart();
      clearShipping();
    };
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-2xl my-5'>
        Your order has been successfully registered!
      </h1>
      <div className='grid  gap-5 sm:grid-cols-[1fr_0.75fr]'>
        <ol className='counter-list'>
          <li className='relative mb-6 ml-8'>
            <p className='marker-accent-rounded'>
              You will receive the{' '}
              <span className='text-accent'>summary of this order</span> in your
              email, stay tuned.
            </p>
          </li>
          <li className='relative ml-8'>
            <p className='marker-accent-rounded'>
              Follow the status changes of your order in your{' '}
              <span className='text-accent'>personal area.</span>
            </p>
          </li>
        </ol>
        <div className='flex flex-col gap-4'>
          <CheckoutProducts cart={cart} shipping={shipping} />
          <Link to='/' className='self-center'>
            <button className='py-2 w-[250px] text-accent border border-accent rounded-md'>
              SAVE MORE
            </button>
          </Link>
        </div>
        <div>
          <span className='font-semibold'>SHIPPING ADDRESS</span>
          <div className='grid grid-cols-[1fr_0.5fr] items-center'>
            <ul className=''>
              <li>{selectedAddress.name}</li>
              <li>{selectedAddress.address}</li>
              <li>
                {selectedAddress.postal}, {selectedAddress.city},{' '}
                {selectedAddress.country}
              </li>
              <li>{selectedAddress.tel}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
