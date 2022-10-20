import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CheckoutProducts({
  cart,
  link,
  onLinkClick,
  shipping,
}) {
  const totalCartValue = cart.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );

  const [isCartShowing, setIsCartShowing] = useState(false);

  return (
    <div className='flex flex-col gap-4'>
      <div className='border border-gray-400 p-5'>
        <span className='flex justify-between items-center pb-2 border-b border-gray-400 '>
          YOUR CART ({cart.length}){' '}
          <button onClick={() => setIsCartShowing(lastState => !lastState)}>
            <AiOutlinePlus size={25} />
          </button>
        </span>
        {isCartShowing &&
          cart.map(product => (
            <div className='grid grid-flow-col auto-cols-auto items-center gap-2 p-3 border-b border-gray-400'>
              <img
                className='aspect-[4/3] object-contain'
                src={product.image}
              />
              <span className='overflow-ellipsis overflow-hidden whitespace-nowrap'>
                {product.title}
              </span>
              <span className='font-bold'>${product.price}</span>
            </div>
          ))}
        <div className='flex justify-between items-center pt-2'>
          <span>SUBTOTAL</span>
          <span className='font-bold'>${totalCartValue}</span>
        </div>
        {shipping && (
          <div className='flex justify-between items-center pt-2'>
            <span>Shipping Total</span>
            <span>${shipping.price}</span>
          </div>
        )}
      </div>
      <Link onClick={onLinkClick} to={link} className='self-center'>
        <button className='py-2 w-[250px] text-white bg-accent rounded-md'>
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </div>
  );
}
