import { useRef } from "react";
import { Link } from "react-router-dom";
import { EcommerceData } from "../context/EcommerceContext";
import { upperFirst, toLink } from "../helpers/functions";

export default function Home() {
  const [products, categories] = EcommerceData();

  const randomProducts = useRef(
    [...products.data].sort((a, b) => 0.5 - Math.random())
  );

  function getRandomProductImageOfCategory(category) {
    return randomProducts.current.find(
      (product) => category === product.category
    ).image;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {categories.data.map((category) => (
          <div
            className="mt-4 hover:scale-105 transition-transform"
            key={category}
          >
            <Link to={`/categories/${category}`}>
              <img
                key={category}
                className="aspect-square object-contain min-h-max"
                src={getRandomProductImageOfCategory(category)}
              />
              <p className="text-center">{upperFirst(category)}</p>
            </Link>
          </div>
        ))}
      </div>
      {categories.data.map((category) => (
        <div key={category}>
          <h6 className="mt-8 mb-5 text-xl">
            {upperFirst(category)}{" "}
            <Link
              to={`/categories/${category}`}
              className="text-accent text-base ml-3"
            >
              See more {">"}
            </Link>
          </h6>
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.data.map((product) =>
              category === product.category ? (
                <Link
                  to={toLink(`/product/${product.id}/${product.title}`)}
                  key={product.id}
                  className="flex flex-col justify-between p-5 bg-white shadow-lg rounded-lg"
                >
                  <img
                    src={product.image}
                    className="object-contain aspect-square p-1"
                  />
                  <p className="mb-3">{product.title}</p>
                  <span className="text-center text-xl font-bold">
                    ${product.price}
                  </span>
                </Link>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
