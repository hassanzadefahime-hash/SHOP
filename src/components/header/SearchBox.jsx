import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../slices/productApi";

const SearchBox = () => {
  const { data: products } = useGetAllProductsQuery();

  const [search, setSearch] = useState("");

  const filteredProducts = products?.filter((product) =>
    product.title.includes(search)
  );
  
  return (
    <>
      <div className="absolute end-3">
        <IoIosSearch fontSize={26} className="text-gray-500" />
      </div>

      <div className="flex flex-col w-full">
        <input
          className="bg-gray-100 border-1 border-gray-200 py-2 rounded-full w-full ps-5 pe-10"
          placeholder="دنبال چی میگردی ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search.length > 0 && (
          <ul className="absolute bg-gray-100 border-1 border-gray-200 top-11 w-full overflow-hidden flex flex-col gap-2 rounded-xl">
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => setSearch("")}
                  key={product.id}
                >
                  <li className="flex flex-row items-center gap-4 hover:bg-white transition delay-150 duration-300 ease-in-out">
                    <img
                      className="w-16 aspect-square object-cover"
                      src={`http://localhost:9000/images/${product.sticker}`}
                      alt={product.title}
                    />
                    {product.title}
                  </li>
                </Link>
              ))
            ) : (
              <div className="text-lg text-center py-4">موجود نیست</div>
            )}
          </ul>
        )}
      </div>
    </>
  );
};
export default SearchBox;
