import { Link } from "react-router-dom";
import { toLink } from "../../helpers/functions";
import { BsFillTrashFill } from "react-icons/bs";
import { deviceSizes as ds } from "../../helpers/variables";
import { useMediaQuery } from "react-responsive";

export default function Cart({ cart, setCart }) {
  const totalCartValue = cart.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );

  const isTablet = useMediaQuery({ query: `(min-width: ${ds.sm})` });

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {isTablet && (
          <h1 className="font-bold text-3xl mb-3">
            {cart.length > 0 ? "Your cart" : "Your cart is empty"}
          </h1>
        )}
        <span>
          {cart.length} item{cart.length > 1 && "s"} |{" "}
          <span className="font-bold">${totalCartValue}</span>
        </span>
      </div>
      <div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 items-center py-5 sm:py-[2%] border-b border-gray-300 sm:border-0"
          >
            <img
              src={product.image}
              className="aspect-[4/3] object-contain w-48"
            />
            <Link
              to={`/product/${product.id}/${toLink(product.title)}`}
              className="search-link !p-0"
            >
              {product.title}
            </Link>
            <span className="flex justify-end">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  setCart((lastCart) =>
                    lastCart.filter((item) => item.id !== product.id)
                  )
                }
              >
                <BsFillTrashFill size={20} />
                Remove
              </button>
            </span>
            <span className="flex items-center sm:justify-end font-bold">
              ${product.price}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        {cart.length > 0 ? (
          <Link to="/">{"<"} See other products</Link>
        ) : (
          <Link to="/">Start Buying</Link>
        )}
        {cart.length > 0 && (
          <Link to="/checkout/delivery">
            <button className="bg-accent text-white py-2 px-16 rounded-md">
              PAY
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
