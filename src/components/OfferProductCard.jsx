import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";

const OfferProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-row md:flex md:flex-col gap-0 border-1 border-gray-200 md:pb-2 overflow-hidden transition delay-150 duration-300 ease-in-out hover:scale-103 hover:boredr">
        <div className="w-2/5 md:w-full h-full relative">
          <div
            className="absolute right-0 md:top-4 top-2 text-[#fff] md:pl-5.5 pl-3 pt-0.5 align-bottom md:pr-2 pr-1.5 text-bold md:text-lg text-xs rounded-l-full shadow-xl"
            style={{
              background:
                "linear-gradient(0deg,rgba(196, 27, 27, 1) 0%, rgba(232, 39, 39, 1) 100%)",
              borderBottom: "2px #821515 solid",
              borderTop: "2px #FF0000 solid",
            }}
          >
            {product.discount}٪
          </div>

          <div className="w-full">
            <img
              className="md:w-full w-full aspect-square object-cover"
              src={`http://localhost:9000/images/${product.sticker}`}
            />
          </div>
        </div>

        <div className="md:px-1 lg:px-3 md:w-full w-3/5 pl-4 pr-4 md:pt-0 pt-0 flex flex-col justify-between gap-2 pb-1">
          <div className="flex flex-col gap-2 md:pt-1 pt-3 md:px-2">
            <p className="md:text-lg text-sm text-gray-600 font-bold line-clamp-1">
              {product.title}
            </p>

            <p className="md:text-base text-sm text-justify text-gray-500 line-clamp-1">
              {product.description}
            </p>
          </div>

          <div className="w-full md:px-0 px-0 flex lg:flex-row flex-col lg:items-center items-end pe-2 justify-between">
            <div className="line-through text-gray-500 md:text-base text-xs">
              <CustomNumeralNumericFormat
                value={product.price}
                thousandSeparator=","
              />
            </div>

            <div className="flex gap-1 items-center justify-end">
              <span className="md:text-base text-xs">قیمت: </span>

              <p className="md:text-base text-xs text-gray-800 text-end">
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toLocaleString()}
              </p>

              <span className="md:text-base text-xs">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferProductCard;

