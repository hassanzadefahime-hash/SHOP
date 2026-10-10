import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram, SiX } from "react-icons/si";
import { Link } from "react-router-dom";
import pic from "../../assets/images/logo.png";

const FooterBrand = () => {
  return (
    <>
      <div className="flex flex-col gap-3 px-4">
        <Link to={"/"} className="h-full">
          <img src={pic} width={140} className="pt-0 scale-100" />
        </Link>

        <p className="text-base font-bold text-justify leading-8">
          ما با هدف ارائه بهترین محصولات دیجیتال باکیفیت بالا و قیمت مناسب
          فعالیت خود را آغاز کرده ایم .
        </p>

        <div className="flex gap-4 justify-center">
          <span className="p-2 bg-gray-300 rounded-full">
            <SiInstagram fontSize={19} className="text-gray-600" />
          </span>

          <span className="p-2 bg-gray-300 rounded-full">
            <FaTelegramPlane fontSize={19} className="text-gray-600" />
          </span>

          <span className="p-2 bg-gray-300 rounded-full">
            <SiX fontSize={19} className="text-gray-600" />
          </span>
        </div>
      </div>
    </>
  );
};
export default FooterBrand;
