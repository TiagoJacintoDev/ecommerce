import { useState } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { useFormValidation } from '../../../hooks/useFormValidation';

export default function ChangeEmail() {
  const [error, setError] = useState('');
  const { changeEmail, authenticate } = UserAuth();

  console.log(error);

  const {
    handleSubmit,
    register,
    reset,
    defaultRequiredMessage,
    emailPattern,
    errors,
  } = useFormValidation();

  async function onEmailSubmit({ email }) {
    try {
      await changeEmail(email);
    } catch (e) {
      setError(e.message);
    } finally {
      reset({ email: '' });
      authenticate();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onEmailSubmit)}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor='email'>
            Email Address
          </label>
          <input
            {...register('email', {
              required: defaultRequiredMessage,
              pattern: { value: emailPattern, message: 'Email is invalid' },
            })}
            className='authentication-input'
            type='email'
            name='email'
            id='email'
          />
          {errors?.email?.message}
          <button className='authentication-button'>CHANGE EMAIL</button>
        </div>
      </form>
    </>
  );
}
