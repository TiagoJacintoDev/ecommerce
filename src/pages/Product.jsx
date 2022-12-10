import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import FavoriteButton from "../components/FavoriteButton";
import { toLink } from "../helpers/functions";
import { EcommerceData } from "../context/EcommerceContext";

export default function Product({ favorites, setFavorites, setCart }) {
  const { id } = useParams();
  const [products] = EcommerceData();

  const currentProduct = products.data.find((product) => product.id === +id);

  const relatedProducts = products.data.filter(
    (product) => currentProduct.category === product.category
  );

  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-flow-col auto-cols-fr gap-10">
        <img
          className="aspect-[4/3] object-contain m-auto"
          src={currentProduct.image}
        />
        <div className="my-auto">
          <h1 className="font-bold text-xl mb-3">{currentProduct.title}</h1>
          <div className="flex gap-1 items-center mb-3">
            <AiFillStar
              className="text-review-yellow brightness-95"
              size={25}
            />
            {currentProduct.rating.rate} ({currentProduct.rating.count})
          </div>
          <p className="font-bold text-3xl">${currentProduct.price}</p>
          <div className="flex my-3 gap-3">
            <input
              type="text"
              className="w-12 rounded-md border border-gray-600 text-center"
            />
            <button
              onClick={() =>
                setCart((lastCart) => [...lastCart, currentProduct])
              }
              className="purchase-button add-to-cart-button flex-1"
            >
              ADD TO CART
            </button>
            <button className="text-accent hover:text-white flex flex-col justify-center items-center border border-accent rounded-md h-12 w-12 hover:bg-accent">
              <FavoriteButton
                product={currentProduct}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-5 mb-2">Product Description</h2>
        <p>{currentProduct.description}</p>
      </div>

      <h1 className="text-lg font-semibold mt-5 mb-2">Related Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 p-3 bg-white shadow-2xl rounded-lg"
          >
            <span className="self-end">
              <FavoriteButton
                product={product}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </span>
            <Link
              to={`/product/${product.id}/${toLink(product.title)}`}
              className="[&>*]:mb-3"
            >
              <img
                src={product.image}
                className="object-contain aspect-square p-1"
              />
              <p className="text-center">{product.title}</p>
              <p className="text-center text-xl font-bold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// <Link
//   to="/cart"
//   onClick={() => setCart((lastCart) => [...lastCart, currentProduct])}
//   className="purchase-button buy-now-button"
// >
//   BUY NOW
// </Link>;
