import { Route, Routes } from 'react-router-dom';
import Delivery from '../../pages/checkout/Delivery';
import Payment from '../../pages/checkout/Payment';
import Shipping from '../../pages/checkout/Shipping';
import Success from '../../pages/checkout/Success';
import ProtectedCheckoutRoute from './protectors/ProtectedCheckoutRoute';

export default function CartRouting({
  addresses,
  setAddresses,
  cart,
  setCart,
  shipping,
  setShipping,
}) {
  return (
    <ProtectedCheckoutRoute cart={cart}>
      <Routes>
        <Route
          path='delivery'
          element={
            <Delivery
              addresses={addresses}
              setAddresses={setAddresses}
              cart={cart}
            />
          }
        />
        <Route
          path='shipping'
          element={
            <Shipping
              cart={cart}
              shipping={shipping}
              setShipping={setShipping}
            />
          }
        />
        <Route
          path='payment'
          element={
            <Payment cart={cart} addresses={addresses} shipping={shipping} />
          }
        />
        <Route
          path='success'
          element={
            <Success
              cart={cart}
              clearCart={() => setCart([])}
              clearShipping={() => setShipping([])}
              addresses={addresses}
              shipping={shipping}
            />
          }
        />
      </Routes>
    </ProtectedCheckoutRoute>
  );
}
