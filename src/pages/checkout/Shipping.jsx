import CheckoutProducts from '../../components/CheckoutProducts';
import { shippingOptions } from '../../data/shippingOptions';
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Shipping({ cart }) {
  const [selectedShipping, setSelectedShipping] = useState(1);
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-2xl mt-5 mb-4'>
        Chose the type of shipping
      </h1>
      <div className='grid items-start gap-12 grid-cols-[1fr_0.75fr]'>
        <div>
          {shippingOptions.map(option => (
            <div
              onClick={() => setSelectedShipping(option.id)}
              key={option.id}
              className={`${
                option.id === selectedShipping &&
                'border-accent bg-accent-light bg-opacity-20'
              } grid grid-cols-[auto_2fr_1fr] items-center gap-5 border border-gray-300 rounded-md p-4 mb-7 cursor-pointer`}
            >
              {option.id === selectedShipping ? (
                <BsCheckCircleFill size={20} className='text-accent' />
              ) : (
                <BsCircle size={20} />
              )}
              <div>
                <p>{option.name.toUpperCase()}</p>
                <p>{option.deliveryDate}</p>
              </div>
              <span className='font-bold justify-self-end'>${option.cost}</span>
            </div>
          ))}
        </div>
        <CheckoutProducts cart={cart} link={'/checkout/payment'} />
      </div>
    </div>
  );
}
