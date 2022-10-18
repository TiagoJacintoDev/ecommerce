import { useEffect, useState } from 'react';
import CountriesDropdown from '../../components/CountriesDropdown';
import { useFormValidation } from '../../hooks/useFormValidation';
import { v4 } from 'uuid';

export default function Delivery({ addresses, setAddresses }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const {
    defaultRequiredMessage,
    defaultCellPhonePatternMessage,
    cellNumberPattern,
    errors,
    handleSubmit,
    register,
    reset,
  } = useFormValidation();

  useEffect(() => {
    setSelectedAddress(addresses[addresses.length - 1]);
  }, [addresses]);

  function onSubmit({ name, address, postal, city, country, tel }) {
    setIsFormOpen(false);
    setIsEditingAddress(false);

    if (isEditingAddress) {
      setAddresses(lastAddresses =>
        lastAddresses.map(adr =>
          adr.id === selectedAddress.id
            ? { ...adr, name, address, postal, city, country, tel }
            : adr
        )
      );
    } else {
      setAddresses(lastAddresses => [
        ...lastAddresses,
        { id: v4(), name, address, postal, city, country, tel },
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

    reset({
      name: selectedAddress.name,
      address: selectedAddress.address,
      postal: selectedAddress.postal,
      city: selectedAddress.city,
      country: selectedAddress.country,
      tel: selectedAddress.tel,
    });
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
      <h1>Where do you want to receive the delivery?</h1>
      {addresses.length === 0 || isFormOpen ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name'>Name</label>
          <input
            {...register('name', {
              required: defaultRequiredMessage,
            })}
            type='text'
            name='name'
            id='name'
          />
          {errors?.name?.message}

          <label htmlFor='address'>Address</label>
          <input
            {...register('address', {
              required: defaultRequiredMessage,
            })}
            type='text'
            name='address'
            id='address'
          />
          {errors?.address?.message}

          <label htmlFor='postal'>Postal</label>
          <input
            {...register('postal', {
              required: defaultRequiredMessage,
            })}
            type='text'
            name='postal'
            id='postal'
          />
          {errors?.postal?.message}

          <label htmlFor='city'>City</label>
          <input
            {...register('city', {
              required: defaultRequiredMessage,
            })}
            type='text'
            name='city'
            id='city'
          />
          {errors?.city?.message}

          <CountriesDropdown
            register={register}
            errors={errors}
            defaultRequiredMessage
          />

          <label htmlFor='tel'>Cell Phone</label>
          <input
            {...register('tel', {
              required: defaultRequiredMessage,
              pattern: {
                value: cellNumberPattern,
                message: defaultCellPhonePatternMessage,
              },
            })}
            type='tel'
            name='tel'
            id='tel'
          />
          {errors?.tel?.message}

          <button type='button' onClick={cancelForm}>
            Cancel
          </button>
          <button>Save</button>
        </form>
      ) : (
        <>
          {addresses.map(address => (
            <ul key={address.id}>
              <li>{address.name}</li>
              <li>{address.address}</li>
              <li>{address.postal}</li>
              <li>{address.city}</li>
              <li>{address.country}</li>
              <li>{address.tel}</li>
            </ul>
          ))}
          <button onClick={() => setIsFormOpen(true)}>Create New</button>
          <button onClick={editAddress}>Edit</button>
        </>
      )}
    </div>
  );
}
