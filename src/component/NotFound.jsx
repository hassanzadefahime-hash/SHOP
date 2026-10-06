import LottiePackage from "lottie-react"; 
import { Link } from "react-router-dom";
import Loadercat from "../assets/Loadercat.json"
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

const NotFound = () => {
    const Lottie = LottiePackage.default;

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
        <Lottie
        animationData={Loadercat}
        loop={true}
        autoplay={true}
        
      />
      <div className="flex items-center justify-center flex-col gap-2">
      <p className="text-6xl font-bold bg-gradient-to-r from-[#443B75] to-[#7272A6] bg-clip-text text-transparent" style={{fontFamily:"arial"}}>404</p>
      <p className="text-3xl text-gray-600">این صفحه پیدا نشد.</p>
      <p className="text-xl text-gray-500 text-center">بنظر می‌رسه صفحه‌ای که دنبالش بودی وجود نداره.</p>
      <div className="flex gap-3">
        <Link to={"/"} className="bg-[#443B75] text-white md:p-2 md:px-4 rounded-full font-bold border-2 border-[#443B75] flex items-center md:gap-2 gap-1 md:text-md text-sm p-1 px-1.5"><p>بازگشت به صفحه اصلی</p><FaArrowLeftLong/></Link>
        <Link to={"/products"} className="border-2 border-[#443B75] text-[#443B75] md:p-2 md:px-4 rounded-full font-bold  flex items-center md:gap-2 md:text-lg text-sm p-1 px-1.5 gap-1"><p>مشاهده محصولات</p><TbCategory/></Link>
      </div>
      </div>

    </div>
  );
};
export default NotFound;
