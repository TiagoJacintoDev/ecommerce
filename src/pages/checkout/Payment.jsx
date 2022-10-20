import { Link } from 'react-router-dom';
import CheckoutProducts from '../../components/CheckoutProducts';

export default function Payment({ addresses, cart, shipping }) {
  const selectedAddress = addresses.find(address => address.selected);
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-2xl mt-5 mb-4'>
        Review and confirm your order
      </h1>
      <div className='grid items-start gap-5 sm:grid-cols-[1fr_0.75fr]'>
        <div>
          <span className='font-semibold'>SHIPPING ADDRESS</span>
          <div className='grid grid-cols-[1fr_0.5fr] items-center'>
            <ul className='py-1 px-3'>
              <li>{selectedAddress.name}</li>
              <li>{selectedAddress.address}</li>
              <li>
                {selectedAddress.postal}, {selectedAddress.city},{' '}
                {selectedAddress.country}
              </li>
              <li>{selectedAddress.tel}</li>
            </ul>
            <Link to='/checkout/shipping' className='text-blue-700'>
              Edit
            </Link>
          </div>
        </div>
        <CheckoutProducts
          cart={cart}
          link={'/checkout/success'}
          shipping={shipping}
        />
      </div>
    </div>
  );
}
