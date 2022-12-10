import { AiOutlineSearch } from "react-icons/ai";
import NotFoundImage from "../../../assets/1127749553-vector.jpg";

export default function NoResultsFound({ search }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-3 items-center text-xl mb-10">
          <AiOutlineSearch />
          <div>
            There are no results for the search{" "}
            <span className="font-bold m-0 p-0">"{search}"</span>
          </div>
        </div>
        <ul className="list-disc">
          <li>Check the spelling of inserted words</li>
          <li>Enter a new keyword</li>
          <li>Use synonyms or related searches</li>
        </ul>
      </div>
      <img src={NotFoundImage} />
    </>
  );
}
