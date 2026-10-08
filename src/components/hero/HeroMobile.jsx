import hdmobile from "../../assets/images/hd-mobile.png";

import { RiSecurePaymentFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const HeroMobile = () => {
  return (
    <div className="md:hidden inline">
      <div
        className="overflow-hidden w-[100vw] rounded-b-3xl py-1 h-auto"
        style={{
          background: "linear-gradient(to right, #2c3e50, #2980b9)",
        }}
      >
        <div className="relative h-full">
          <div className="grid grid-cols-7 gap-3 absolute top-0 left-0 p-2">
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-55"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-65"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-60"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-55"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-60"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-35"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-55"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-60"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-15"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-60"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-65"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-35"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-15"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-25"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-35"></span>
          </div>

          <div className="flex flex-col items-center gap-9 justify-around h-full py-12">
            <div className="grid grid-cols-2 w-[90%]">
              <div className="text-white">
                <p className="text-2xl font-bold">فروشگاه ماربین</p>

                <div className="h-12 overflow-hidden">
                  <div className="flex flex-col animate-flip">
                    <span className="h-12 flex items-center text-white text-xl">
                      قاب موبایل
                    </span>
                    <span className="h-12 flex items-center text-white text-xl">
                      گلس
                    </span>
                    <span className="h-12 flex items-center text-white text-xl">
                      شارژر
                    </span>
                    <span className="h-12 flex items-center text-white text-xl">
                      هندزفری
                    </span>
                  </div>
                </div>

                <p className="text-lg">
                  جدیدترین لوازم جانبی موبایل با ضمانت اصالت کالا
                </p>

                <button className="py-1 px-2 border-1 flex items-center justify-center gap-2 font-bold border-white rounded-full mt-7 text-white hover:text-[#2980b9] hover:bg-white transition delay-100 duration-200">
                  <p className="text-sm">مشاهده محصولات</p>
                  <FaArrowLeftLong fontSize={12} />
                </button>
              </div>

              <div className="relative w-full h-full">
                <div
                  className="w-[50vw] absolute aspect-square rounded-full -top-1/3 -left-1/3"
                  style={{
                    boxShadow: "0px 0px 11px -4px rgba(256,256,256,0.4)",
                  }}
                ></div>

                <img
                  src={hdmobile}
                  className="headphone w-full z-200"
                  style={{
                    filter: "drop-shadow(0 35px 45px rgba(0,0,0,.35))",
                  }}
                />
              </div>
            </div>

            <div className="flex gap-3 bg-glass py-3 px-2 justify-between w-[85%]">
              <div className="flex flex-col w-1/3 items-center justify-between">
                <span className="text-white text-sm text-center">
                  ارسال سریع
                </span>
                <FaShippingFast className="text-white" fontSize={22} />
              </div>

              <span className="border-l-1 border-white opacity-50"></span>

              <div className="flex flex-col w-1/3 items-center gap-2 justify-between">
                <span className="text-white text-sm text-center">
                  ضمانت اصالت کالا
                </span>
                <MdVerified className="text-white" fontSize={22} />
              </div>

              <span className="border-l-1 border-white opacity-50"></span>

              <div className="flex flex-col w-1/3 items-center gap-2 justify-between">
                <span className="text-white text-sm text-center">
                  پرداخت امن{" "}
                </span>
                <RiSecurePaymentFill className="text-white" fontSize={22} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 absolute bottom-0 right-0 p-2">
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-15"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-45"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-25"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-15"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-55"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-50"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-40"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-30"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-20"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-10"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-2"></span>

            <span className="h-1 w-1 bg-white rounded-full opacity-55"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-35"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-25"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-5"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
            <span className="h-1 w-1 bg-white rounded-full opacity-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroMobile;
