import { createPortal } from "react-dom";
import { VscError } from "react-icons/vsc";

export default function IncorrectAuthentication({ closeModal }) {
  return createPortal(
    <>
      <div
        className="fixed bg-[rgba(0,0,0,0.5)] inset-0"
        onClick={closeModal}
      />
      <div className="absolute-center sm:w-[500px] w-[90vw] bg-white flex flex-col items-center justify-center gap-5 p-6 rounded-lg">
        <VscError size={100} color={"red"} />
        <div>The email and/or password are incorrect. Please try again.</div>
        <button
          onClick={closeModal}
          className="bg-accent-light rounded-lg text-white py-2 px-6 font-bold"
        >
          OK
        </button>
      </div>
    </>,
    document.getElementById("root")
  );
}
