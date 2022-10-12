import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { logIn } = UserAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Log In</h1>
        <p className='py-2'>
          Don't have an account?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor='email'>
              Email Address
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              className='border p-3'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor='password'>
              Password
            </label>
            <input
              onChange={e => setPassword(e.target.value)}
              className='border p-3'
              type='password'
              name='paswword'
              id='password'
            />
          </div>
          <button className='authentication-button' disabled={!(email && password)}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
