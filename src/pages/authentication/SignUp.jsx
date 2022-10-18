import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { useFormValidation } from '../../hooks/useFormValidation';

export default function SignUp() {
  const [error, setError] = useState('');

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    errors,
    emailPattern,
    passwordPattern,
    defaultRequiredMessage,
  } = useFormValidation();

  async function onSubmit({ email, password }) {
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign Up With Your Email</h1>
        <p className='py-2'>
          Already have an account?{' '}
          <Link to='/login' className='underline'>
            Log in.
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          </div>
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
          <button className='authentication-button'>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
