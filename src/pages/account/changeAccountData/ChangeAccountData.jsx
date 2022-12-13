import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import { BsFillPersonFill } from "react-icons/bs";

export default function ChangeAccountData() {
  return (
    <>
      <div className="w-[270px] xs:w-[400px] sm:w-[400px]">
        <p className="flex gap-2 items-center font-bold text-xs mb-1">
          <BsFillPersonFill className="text-accent" size={20} /> CHANGE ACCOUNT
          DATA
        </p>
        <ChangeEmail />
        <ChangePassword />
      </div>
      {/* {isShowingError && (
        <FalseAuthentication closeModal={() => setIsShowingError(false)} />
      )} */}
    </>
  );
}
