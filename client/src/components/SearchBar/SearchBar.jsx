import { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import SearchBarMenuModal from "./SearchBarMenu";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function SearchBar() {
  const [isSearchBarMenuOpen, setIsMenuSearchBarOpen] = useState(false);
  const [history, setHistory] = useLocalStorage("history");
  const [search, setSearch] = useState("");

  function addSearchToHistory() {
    setHistory((lastHistory) => [search, ...lastHistory]);
    setSearch("");
  }

  return (
    <>
      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addSearchToHistory();
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a product, brand or reference..."
            onFocus={() => setIsMenuSearchBarOpen(true)}
            className="rounded-3xl py-1.5 pl-3 border border-gray-400 md:w-[310px] lg:w-[500px] xl:w-[580px]"
          />
        </form>
        <div className="bg-white absolute right-1 top-1/2 -translate-y-1/2 flex gap-2 items-center rounded-3xl">
          {isSearchBarMenuOpen && (
            <AiOutlineClose
              onClick={() => {
                setIsMenuSearchBarOpen(false);
                setSearch("");
              }}
              className="cursor-pointer"
              size={20}
            />
          )}

          <AiOutlineSearch
            className="bg-black rounded-full p-[0.15rem] cursor-pointer hover:bg-accent"
            size={25}
            color={"white"}
          />
        </div>
      </div>
      {isSearchBarMenuOpen && (
        <SearchBarMenuModal
          cleanHistory={() => setHistory([])}
          history={history}
          search={search}
          closeSearchMenu={() => setIsMenuSearchBarOpen(false)}
        />
      )}
    </>
  );
}
