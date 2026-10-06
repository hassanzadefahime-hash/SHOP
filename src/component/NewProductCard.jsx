import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";

const NewProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-row md:flex md:flex-col gap-0 lg:gap-4 border-1 border-gray-200 md:pb-2 overflow-hidden transition delay-150 duration-300 ease-in-out hover:scale-103 hover:boredr">
        <div className="md:w-full w-2/5 aspect-square object-cover relative">
          <div
            className="absolute right-0 md:top-4 top-2 text-[#fff] md:pl-6 pl-3.5 align-bottom md:pr-4.5 pr-1.5 md:pt-0.5 md:pb-1 font-bold md:text-lg text-sm rounded-l-full shadow-xl"
            style={{
              background:
                "linear-gradient(0deg,rgba(17, 115, 27, 1) 0%, rgba(122, 222, 40, 1) 100%)",
            }}
          >
            جدید
          </div>

          <div className="w-full h-full">
            <img
              className="md:w-full w-full h-full aspect-square object-cover"
              src={`http://localhost:9000/images/${product.sticker}`}
            />
          </div>
        </div>

        <div className="md:px-3 w-3/5 md:w-full bg-white md:-mt-4 pr-4 pl-4 md:pt-2 pt-0 flex flex-col justify-between gap-2 pb-1">
          <div className="flex flex-col gap-2 md:pt-1 pt-3 md:px-2">
            <p className="md:text-lg text-sm text-gray-600 font-bold">
              {product.title}
            </p>

            <p className="md:text-base text-sm text-gray-500 text-justify lg:line-clamp-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="w-full">
            <p className="md:text-base text-sm text-gray-800 font-bold md:pb-1 md:pt-2 pb-3 pt-6 lg:pe-2 text-end">
              <CustomNumeralNumericFormat
                value={product.price}
                thousandSeparator=","
                prefix={`قیمت : ‍‍‍`}
                suffix={` تومان `}
              />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProductCard;
