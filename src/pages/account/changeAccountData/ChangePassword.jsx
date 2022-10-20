import { useState } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { useFormValidation } from '../../../hooks/useFormValidation';

export default function ChangePassword() {
  const { changePassword } = UserAuth();
  const [error, setError] = useState('');

  const {
    handleSubmit,
    register,
    reset,
    defaultRequiredMessage,
    passwordPattern,
    errors,
  } = useFormValidation();

  async function onPasswordSubmit({ password }) {
    try {
      await changePassword(password);
    } catch (e) {
      setError(e.message);
    }
    reset({ password: '' });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onPasswordSubmit)}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor='password'>
            Password
          </label>
          <input
            {...register('password', {
              required: defaultRequiredMessage,
              pattern: {
                value: passwordPattern,
                message: 'Password is invalid',
              },
            })}
            className='authentication-input'
            type='password'
            name='password'
            id='password'
          />
          {errors?.password?.message}
        </div>
        <button className='authentication-button'>CHANGE PASSWORD</button>
      </form>
    </>
  );
}
