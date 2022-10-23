import CheckoutProducts from '../../components/CheckoutProducts';
import { shippingOptions } from '../../data/shippingOptions';
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutHeader from '../../components/CheckoutHeader';

export default function Shipping({ cart, setShipping }) {
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);

  return (
    <>
      <CheckoutHeader pageTitle='SHIPPING' />
      <div className='container mx-auto'>
        <h1 className='font-bold text-2xl my-5'>Chose the type of shipping</h1>
        <div className='grid items-start sm:gap-12 sm:grid-cols-[1fr_0.75fr]'>
          <div>
            {shippingOptions.map(option => (
              <div
                onClick={() => setSelectedShipping(option)}
                key={option.id}
                className={`${
                  option.id === selectedShipping.id &&
                  'border-accent bg-accent-light bg-opacity-20'
                } grid grid-cols-[auto_2fr_1fr] items-center gap-5 border border-gray-300 rounded-md p-4 mb-6 cursor-pointer`}
              >
                {option.id === selectedShipping.id ? (
                  <BsCheckCircleFill size={20} className='text-accent' />
                ) : (
                  <BsCircle size={20} />
                )}
                <div>
                  <p>{option.title.toUpperCase()}</p>
                  <p>{option.deliveryDate}</p>
                </div>
                <span className='font-bold justify-self-end'>
                  ${option.price}
                </span>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <CheckoutProducts cart={cart} />
            <Link
              onClick={() => setShipping(selectedShipping)}
              to='/checkout/payment'
              className='self-center'
            >
              <button className='py-2 w-[250px] text-white bg-accent rounded-md'>
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
