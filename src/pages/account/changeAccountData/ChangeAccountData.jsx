import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

export default function ChangeAccountData() {
  return (
    <>
      <div className='w-[400px]'>
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
