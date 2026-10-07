import LottiePackage from "lottie-react";
import animationData from "../assets/animations/emptycart.json";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Lottie = LottiePackage.default;

export default function EmptyCart() {
  return (
    <div className=" flex flex-col items-center gap-6 md:w-1/2  mx-auto">
      <div
        className="mx-auto md:h-90 md:w-90 rounded-full overflow-hidden"
        style={{
          background:
            "linear-gradient(0deg,rgba(255, 255, 255, 0) 0%, rgba(212, 212, 212, 0.61) 100%)",
        }}
      >
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>
      <p className="md:text-3xl text-lg font-bold">سبد خریدت هنوز خالیه! </p>
      <div className="flex flex-col text-gray-500 gap-1">
        <p>محصول مورد علاقه ات رو پیدا کن</p>
        <p>و به سبد خرید اضافه کن.</p>
      </div>
      <Link to={"/"} className=" ">
        <div className="bg-[#2a5298] px-4  py-2 w-auto text-white rounded-xl  flex flex-row items-center justify-center gap-2">
          <p className="text-xl">مشاهده محصولات</p>
          <FaArrowLeftLong />
        </div>
      </Link>
    </div>
  );
}
