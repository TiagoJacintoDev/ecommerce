import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function FavoriteButton({ id, setFavorites, favorites }) {
  function addFavorite() {
    setFavorites(lastState => [...lastState, id]);
  }
  function removeFavorite() {
    setFavorites(lastState => lastState.filter(fav => fav !== id));
  }

  return (
    <>
      {favorites.includes(id) ? (
        <button>
          <AiFillHeart onClick={removeFavorite} size={25} className='text-accent' />
        </button>
      ) : (
        <button>
          <AiOutlineHeart onClick={addFavorite} size={25} className='text-accent' />
        </button>
      )}
    </>
  );
}
