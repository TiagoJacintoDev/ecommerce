import InitialMenu from './MenuContent/InitialMenu';
import SearchingMenu from './MenuContent/SearchingMenu';

export default function SearchBarMenu({
  closeSearchMenu,
  history,
  cleanHistory,
  search,
}) {
  return (
    <>
      <div
        className='fixed bg-[rgba(0,0,0,0.5)] left-0 w-[100vw] h-[300vw] -z-10'
        onClick={closeSearchMenu}
      />
      <div className='search-bar-menu'>
        {search ? (
          <SearchingMenu search={search} />
        ) : (
          <InitialMenu history={history} cleanHistory={cleanHistory} />
        )}
      </div>
    </>
  );
}
