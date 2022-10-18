import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function FavoriteButton({ product, setFavorites, favorites }) {
  function addFavorite() {
    setFavorites(lastState => [...lastState, product]);
  }
  function removeFavorite() {
    setFavorites(lastState => lastState.filter(fav => fav !== product));
  }

  return (
    <>
      {favorites.includes(product) ? (
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
