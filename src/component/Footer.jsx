import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { SiInstagram, SiX } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { useGetAllCategoryQuery } from "../slices/productApi";
import { Link } from "react-router-dom";

import pic from "../assets/logo.png";

const Footer = () => {
  const { data } = useGetAllCategoryQuery();

  return (
    <>
      <div
        className="mt-auto lg:pt-10 lg:pb-10 px-6 overflow-hidden w-full relative grid lg:grid-cols-4 grid-cols-1 gap-8 pt-10 pb-25"
        style={{ background: "#F2F2F2" }}
      >
        <div className="flex flex-col gap-3 px-4">
          <Link className="h-full">
            <img src={pic} width={140} className="pt-0 scale-100" />
          </Link>

          <p className="text-base font-bold text-justify leading-8">
            ما با هدف ارائه بهترین محصولات دیجیتال باکیفیت بالا و قیمت مناسب
            فعالیت خود را آغاز کرده ایم .
          </p>

          <div className=" flex gap-4 justify-center ">
            <span className="p-2 bg-gray-300 rounded-full">
              <SiInstagram fontSize={19} className="text-gray-600 " />
            </span>

            <span className="p-2 bg-gray-300 rounded-full">
              <FaTelegramPlane fontSize={19} className="text-gray-600 " />
            </span>

            <span className="p-2 bg-gray-300 rounded-full">
              <SiX fontSize={19} className="text-gray-600 " />
            </span>
          </div>
        </div>

        <div className="pr-8">
          <ul className="flex gap-4 flex-col text-lg font-bold">
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="pr-8">
          <ul className="flex gap-4 flex-col text-lg font-bold">
            <li>فروشگاه</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>خواندنی ها</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 pl-20 ">
          <div className="flex justify-start items-start relative">
            <ul className="text-lg flex flex-col gap-5">
              <li className=" flex gap-3 items-center font-bold">
                <FiMapPin size={20} />
                <p>تهران، خیابان آزادی</p>
              </li>

              <li className=" flex gap-2 items-center font-bold ">
                <FiPhone size={20} />
                <p>۰۲۱-۱۲۳۴۵۶۷</p>
              </li>

              <li className=" flex gap-2 items-center font-bold">
                <FiMail size={20} />
                <p>info@example.com</p>
              </li>

              <li className=" flex gap-2 items-center font-bold">
                <FiClock size={20} />
                <p>شنبه تا پنجشنبه، ۹تا ۱۸</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-9 gap-3 absolute bottom-0 left-0 p-2">
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-5"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-10"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-20"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-25"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-30"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-35"></span>

            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-10"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-15"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-25"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-40"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-50"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-55"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-60"></span>

            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-5"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-20"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-35"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-40"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-45"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-55"></span>

            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-5"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-10"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-15"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-20"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-25"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-35"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-45"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-50"></span>

            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-10"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-15"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-30"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-40"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-45"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-50"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-60"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-65"></span>

            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-0"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-10"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-20"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-30"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-35"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-40"></span>
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full opacity-45"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
