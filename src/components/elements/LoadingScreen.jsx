import LoadingCircle from "../../assets/circle.796821d23ea8d31010095ff7edc39936.svg";
import Logo from "../../assets/logo.svg";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center">
      <img src={LoadingCircle} className="animate-rotate absolute" />
      <img src={Logo} className="w-14 absolute" />
    </div>
  );
}
