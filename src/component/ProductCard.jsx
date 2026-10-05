import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "../../../STICKER-SHOP/src/components/CustomNumeralNumericFormat";


const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-row md:flex md:flex-col gap-0 md:gap-0 lg:gap-0 border-1 border-gray-200 md:pb-2  overflow-hidden transition delay-150 duration-300 ease-in-out hover:scale-103 ">
        <img
          className="md:w-full  w-2/5 aspect-square object-cover "
          src={`http://localhost:9000/images/${product.sticker}`}
        />
        <div className=" md:px-1 lg:px-3 md:w-full w-3/5 pl-4 pr-4 md:pt-0 md:pt-2 pt-0  flex flex-col justify-between  gap-2  pb-1">
          <div className="flex flex-col gap-2 md:pt-1 pt-3 md:px-2 ">
            <p className="md:text-lg text-sm text-gray-600 font-bold line-clamp-1">
              {product.title}
            </p>
            <p className="md:text-base text-sm text-gray-500 text-justify md:line-clamp-1 line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="w-full flex items-center justify-between md:text-base text-sm text-gray-800">
            
            {product.discount > 0 ? (
              <p className="md:text-base text-sm line-through text-gray-800 font-bold md:pb-1 md:pt-2 pb-3 pt-2 md:pl-2 lg:pe-2 text-end ">
                <CustomNumeralNumericFormat
                  value={product.price}
                  thousandSeparator=","
                  
                />
              </p>
            ) : (<div className="flex justify-end items-center w-full">
              <p>قیمت :</p>
              <p className="md:text-base text-sm  text-gray-800 font-bold  md:pl-2 lg:pe-2 text-end ">
                <CustomNumeralNumericFormat
                  value={product.price}
                  thousandSeparator=","
                  
                />
              </p>
              <p>تومان</p></div>
            )}
            <div className="flex">
            
            <p className="">
              {product.discount > 0
                ? (<div className="flex gap-1">
                  <p>قیمت :</p>
                  <p>
                    {((
                    product.price -
                    (product.price * product.discount) / 100
                  ).toLocaleString())}
                  </p></div>
                )
                : ""}
            </p>
            
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
