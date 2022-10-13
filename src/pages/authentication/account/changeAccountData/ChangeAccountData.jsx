import { UserAuth } from '../../../../context/AuthContext';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

export default function ChangeAccountData() {
  return (
    <>
      <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>User Settings</h1>
          <ChangeEmail />
          <ChangePassword />
        </div>
      </div>
      {/* {isShowingError && (
        <FalseAuthentication closeModal={() => setIsShowingError(false)} />
      )} */}
    </>
  );
}
