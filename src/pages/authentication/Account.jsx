import { UserAuth } from '../../context/AuthContext';

export default function Account() {
  const { user, logout } = UserAuth();

  return (
    <div className='w-[300px]'>
      <h1 className='text-2xl font-bold pb-4'>Account</h1>
      <p>User Email: {user?.email}</p>

      <button onClick={logout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
}
