import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import pic from "../assets/logo.png";

const SignIn = () => {
  return (
    <>
      <div className="lg:w-[36%] md:w-[56%] w-[96%] relative my-14 mx-auto rounded-xl overflow-hidden relative">
        <div className="flex flex-col gap-5 items-center bg-[#F4F8FC] pb-30 pt-10">
          <Link className="">
            <img
              src={pic}
              width={140}
              className="pt-0 mdl:scale-120 scale-90"
            />
          </Link>

          <div className="flex flex-col gap-2 lg:w-3/4 md:w-[80%] w-[90%]">
            <label className="md:text-lg text-base">ایمیل:</label>

            <div className="relative w-full">
              <input
                type="text"
                className="bg-[#FFFFFF] shadow-sm py-1.5 px-3 w-full text-lg rounded-md"
              />

              <MdOutlineMailOutline
                className="absolute end-0 top-1/2 -translate-y-1/2 me-3"
                fontSize={24}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-3/4 md:w-[80%] w-[90%]">
            <label className="md:text-lg text-base">رمز عبور:</label>

            <div className="relative w-full">
              <input
                type="text"
                className="bg-white py-1.5 px-3 w-full md:text-lg text-base shadow-sm rounded-md"
              />

              <RiLockPasswordLine
                className="absolute end-0 top-1/2 -translate-y-1/2 me-3"
                fontSize={24}
              />
            </div>
          </div>

          <button className="md:text-lg text-base mt-5 text-white py-2 rounded-lg lg:w-3/4 md:w-[80%] w-[90%] bg-[#2980B9]">
            ورود
          </button>

          <div className="flex items-center gap-4 lg:w-3/4 md:w-[80%] w-[90%] py-3 text-sm text-black">
            <div className="h-[1px] flex-1 bg-black"></div>

            <span className="shrink-0 md:text-lg text-sm">یا</span>

            <div className="h-[1px] flex-1 bg-black"></div>
          </div>

          <div className="relative lg:w-3/4 md:w-[80%] w-[90%] bg-white shadow-sm rounded-md md:text-lg text-base py-2 text-center">
            <p>ورود با گوگل</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#84C5FA" />
                <stop offset="100%" stopColor="#EAF2FB" />
              </linearGradient>
            </defs>

            <path
              d="M0,55
       C100,105 180,115 280,95
       C370,78 430,45 500,35
       L500,120
       L0,120
       Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SignIn;