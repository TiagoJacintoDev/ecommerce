import InitialMenu from './MenuContent/InitialMenu';
import SearchingMenu from './MenuContent/SearchingMenu';

export default function SearchBarMenu({ closeSearchMenu, history, search }) {
  return (
    <>
      <div
        className='fixed bg-[rgba(0,0,0,0.5)] left-0 w-[100vw] h-[300vw] -z-10'
        onClick={closeSearchMenu}
      />
      <div className='container left-1/2 -translate-x-1/2 absolute top-full p-5 z-10 bg-white rounded-b-xl border border-accent'>
        {search ? (
          <SearchingMenu />
        ) : (
          <InitialMenu closeSearchMenu={closeSearchMenu} history={history} />
        )}
      </div>
    </>
  );
}
