import { Link } from "react-router-dom";
import { EcommerceData } from "../../../context/EcommerceContext";
import { AiOutlineSearch } from "react-icons/ai";
import { upperFirst } from "../../../helpers/functions";
import NoResultsFound from "./NoResultsFound";
import { toLink } from "../../../helpers/functions";

export default function SearchingMenu({ search, closeSearchMenu }) {
  const [products] = EcommerceData();

  const highestRatedProducts = products.data
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 7);

  const categories = highestRatedProducts.map((product) => product.category);
  const mostCommonCategory = categories
    .sort(
      (a, b) =>
        categories.filter((category) => category === a).length -
        categories.filter((category) => category === b).length
    )
    .pop();

  const filteredProducts = products.data
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  if (
    products.data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    ).length === 0
  ) {
    return <NoResultsFound search={search} />;
  }

  return (
    <>
      <div>
        <div className="font-semibold">SEARCH SUGGESTIONS</div>
        <div className="font-bold">"{search}"</div>
        <Link
          onClick={closeSearchMenu}
          to={`/categories/${mostCommonCategory}`}
          className="search-link ml-4 hover:font-semibold"
        >
          In {upperFirst(mostCommonCategory)}
        </Link>
        {highestRatedProducts.map((product) => (
          <Link
            onClick={closeSearchMenu}
            to={toLink(`/product/${product.id}/${product.title}`)}
            key={product.id}
            className="search-link"
          >
            <AiOutlineSearch style={{ minHeight: "20px", minWidth: "20px" }} />
            <h1>{product.title}</h1>
          </Link>
        ))}
      </div>
      <div className="[&>*:not(:last-child)]:mb-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex gap-6 items-center">
            <Link to={toLink(`/product/${product.id}/${product.title}`)}>
              <img src={product.image} className="max-h-20" />
            </Link>
            <div className="flex flex-col">
              <Link
                onClick={closeSearchMenu}
                to={toLink(`/product/${product.id}/${product.title}`)}
                className="hover:underline hover:text-blue-700"
              >
                {product.title}
              </Link>
              <span className="font-bold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
