import { Link } from 'react-router-dom';
import { toLink } from '../helpers/functions';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Cart({ cart, setCart }) {
  const totalCartValue = cart.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );

  return (
    <div className='container mx-auto pt-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl mb-10'>
          {cart.length > 0 ? 'Your cart' : 'Your cart is empty'}
        </h1>
        <span>
          {cart.length} item{cart.length > 1 && 's'} |{' '}
          <span className='font-bold'>${totalCartValue}</span>
        </span>
      </div>
      <div>
        {cart.map(product => (
          <div
            key={product.id}
            className='grid grid-flow-col auto-cols-auto gap-16 items-center mb-10'
          >
            <img src={product.image} className='aspect-square object-contain' />
            <Link to={`/product/${product.id}/${toLink(product.title)}`}>
              {product.title}
            </Link>
            <button
              onClick={() =>
                setCart(lastCart =>
                  lastCart.filter(item => item.id !== product.id)
                )
              }
              className='flex items-center justify-end gap-2'
            >
              <BsFillTrashFill size={20} />
              Remove
            </button>
            <span className='flex items-center justify-end font-bold'>
              ${product.price}
            </span>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center'>
        {cart.length > 0 ? (
          <Link>{'<'} See other products</Link>
        ) : (
          <Link to='/'>Start Buying</Link>
        )}
        <button className='bg-accent text-white py-2 px-16 rounded-md'>
          <Link to={`/checkout/delivery`}>PAY</Link>
        </button>
      </div>
    </div>
  );
}
