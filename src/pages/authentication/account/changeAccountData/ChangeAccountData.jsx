import AccountSidebar from '../../../../components/AccountSidebar';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

export default function ChangeAccountData() {
  return (
    <>
      <AccountSidebar />
      <div className='w-[300px]'>
        <h1 className='text-2xl font-bold pb-2'>User Settings</h1>
        <ChangeEmail />
        <ChangePassword />
      </div>
      {/* {isShowingError && (
        <FalseAuthentication closeModal={() => setIsShowingError(false)} />
      )} */}
    </>
  );
}
