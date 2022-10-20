import { useState } from 'react';
import CountriesDropdown from '../../components/CountriesDropdown';
import { useFormValidation } from '../../hooks/useFormValidation';
import { v4 } from 'uuid';

import CheckoutProducts from '../../components/CheckoutProducts';
import { Link, useLocation } from 'react-router-dom';

export default function Delivery({ addresses, setAddresses, cart }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const { search } = useLocation();

  const {
    defaultRequiredMessage,
    defaultCellPhonePatternMessage,
    cellNumberPattern,
    errors,
    handleSubmit,
    register,
    reset,
  } = useFormValidation();

  function setCurrentAddress(address) {
    if (addresses.length <= 1) return;
    setAddresses(lastAddresses =>
      lastAddresses.map(adr =>
        adr === address
          ? {
              ...adr,
              selected: true,
            }
          : {
              ...adr,
              selected: false,
            }
      )
    );
  }

  function onSubmit({ name, address, postal, city, country, tel }) {
    setIsFormOpen(false);
    setIsEditingAddress(false);

    if (isEditingAddress) {
      setAddresses(lastAddresses =>
        lastAddresses.map(adr =>
          adr.selected
            ? {
                ...adr,
                name,
                address,
                postal,
                city,
                country,
                tel,
              }
            : adr
        )
      );
    } else {
      setAddresses(lastAddresses =>
        lastAddresses.map(adr =>
          adr.selected ? { ...adr, selected: false } : adr
        )
      );
      setAddresses(lastAddresses => [
        ...lastAddresses,
        {
          id: v4(),
          selected: true,
          name,
          address,
          postal,
          city,
          country,
          tel,
        },
      ]);
    }

    reset({
      name: '',
      address: '',
      postal: '',
      city: '',
      country: '',
      tel: '',
    });
  }

  function editAddress() {
    setIsEditingAddress(true);
    setIsFormOpen(true);

    reset(addresses.find(address => address.selected));
  }

  function cancelForm() {
    setIsEditingAddress(false);
    setIsFormOpen(false);

    reset({
      name: '',
      address: '',
      postal: '',
      city: '',
      country: '',
      tel: '',
    });
  }

  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-2xl mt-5 mb-4'>
        Where do you want to receive the delivery?
      </h1>
      <div className='grid items-start gap-5 sm:grid-cols-[1fr_0.75fr]'>
        {addresses.length === 0 || isFormOpen ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col py-1'>
              <label htmlFor='name'>Name</label>
              <input
                {...register('name', {
                  required: defaultRequiredMessage,
                })}
                className='form-input'
                type='text'
                name='name'
                id='name'
              />
              {errors?.name?.message}
            </div>

            <div className='flex flex-col py-1'>
              <label htmlFor='address'>Address</label>
              <input
                {...register('address', {
                  required: defaultRequiredMessage,
                })}
                className='form-input'
                type='text'
                name='address'
                id='address'
              />
              {errors?.address?.message}
            </div>

            <div className='flex flex-col py-1'>
              <label htmlFor='postal'>Postal</label>
              <input
                {...register('postal', {
                  required: defaultRequiredMessage,
                })}
                className='form-input'
                type='text'
                name='postal'
                id='postal'
              />
              {errors?.postal?.message}
            </div>

            <div className='flex flex-col py-1'>
              <label htmlFor='city'>City</label>
              <input
                {...register('city', {
                  required: defaultRequiredMessage,
                })}
                className='form-input'
                type='text'
                name='city'
                id='city'
              />
              {errors?.city?.message}
            </div>

            <div className='flex flex-col py-1'>
              <CountriesDropdown
                register={register}
                errors={errors}
                defaultRequiredMessage
              />
            </div>

            <div className='flex flex-col py-1'>
              <label htmlFor='tel'>Cell Phone</label>
              <input
                {...register('tel', {
                  required: defaultRequiredMessage,
                  pattern: {
                    value: cellNumberPattern,
                    message: defaultCellPhonePatternMessage,
                  },
                })}
                className='form-input'
                type='tel'
                name='tel'
                id='tel'
              />
              {errors?.tel?.message}
            </div>

            <div className='flex items-center justify-between mt-3'>
              <button
                type='button'
                onClick={cancelForm}
                className='form-button'
              >
                CANCEL
              </button>
              <button className='form-button'>SAVE</button>
            </div>
          </form>
        ) : (
          <div>
            {addresses.map(address => (
              <ul
                key={address.id}
                onClick={() => {
                  setCurrentAddress(address);
                }}
                className={`${
                  address.selected ? 'bg-gray-200' : ''
                } border-b border-gray-300 py-1 px-3 cursor-pointer`}
              >
                <li>{address.name}</li>
                <li>{address.address}</li>
                <li>
                  {address.postal}, {address.city}, {address.country}
                </li>
                <li>{address.tel}</li>
              </ul>
            ))}
            <div className='flex items-center justify-between mt-6'>
              <button
                onClick={() => setIsFormOpen(true)}
                className='form-button'
              >
                CREATE NEW
              </button>
              <button onClick={editAddress} className='form-button'>
                EDIT
              </button>
            </div>
          </div>
        )}
        <div className='flex flex-col gap-4'>
          <CheckoutProducts cart={cart} />
          <Link
            to={`/checkout/${search ? 'payment' : 'shipping'}`}
            className='self-center'
          >
            <button className='py-2 w-[250px] text-white bg-accent rounded-md'>
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
