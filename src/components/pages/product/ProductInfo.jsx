import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import CustomNumeralNumericFormat from "../../CustomNumeralNumericFormat";
import ModelSelector from "../../ModelSelector";
import AddToCart from "../../AddToCart";

const ProductInfo = () => {
  const { productID } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productID)
  );
  return (
    <div className="w-full lg:w-[65%] md:pr-6">
      <p className="md:text-4xl text-2xl text-bold py-6">{product?.title}</p>

      <div className="md:text-lg text-base flex gap-3 flex-col">
        <p className="leading-9 mt-6 text-justify">
          قاب سیلیکونی مگ‌سیف با طراحی مینیمال، ساخته‌شده از سیلیکون نرم و
          باکیفیت که علاوه بر محافظت کامل از گوشی، حس لمس بسیار خوبی را ارائه
          می‌دهد. این قاب با شارژرهای MagSafe سازگار بوده و بدون نیاز به خارج
          کردن قاب می‌توانید گوشی خود را شارژ کنید.
        </p>
      </div>

      <div className="flex py-8 flex-col gap-3">
        {product?.discount > 0 && (
          <p className="text-xl line-through text-gray-500">
            <CustomNumeralNumericFormat
              value={product.price}
              thousandSeparator=","
              numeral
              numeralSystem="latn"
            />
          </p>
        )}

        <p className="text-2xl">
          <CustomNumeralNumericFormat
            value={product?.price - (product?.price * product?.discount) / 100}
            thousandSeparator=","
            prefix="قیمت : "
            suffix=" تومان "
            numeral
            numeralSystem="latn"
          />
        </p>
      </div>

      <div>
        <ModelSelector />
      </div>

      <div className="w-full mt-8">
        <AddToCart product={product} />
      </div>
    </div>
  );
};
export default ProductInfo;
