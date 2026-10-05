import about from "../assets/about.png";
import { BsBoxSeam } from "react-icons/bs";
import { SlEmotsmile } from "react-icons/sl";
import { IoIosStarOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-10 lg:w-[90%] w-[85%] mx-auto">
      <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-0 h-[85%] mt-10 lg:h-auto">
        <div className="w-[28%] lg:block hidden">
          <img src={about} className="h-auto w-full" />
        </div>

        <div className="lg:w-[72%] h-full lg:px-18">
          <div className="flex flex-col items-start gap-5 h-full lg:mt-6">
            <p className="text-4xl">درباره ما</p>

            <p className="leading-8 text-xl text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری برای
              طراحان رایانه ای علی الخصوص طاسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="justify-center lg:mb-8 mb-4 w-full lg:w-[94%] mx-auto flex flex-row flex-wrap lg:gap-5 md:gap-5 gap-2 mt-10">
            <div className="squircle flex flex-col gap-2 justify-center bg-gray-100 w-40 items-center">
              <IoIosStarOutline fontSize={32} className="mt-0" />

              <div className="text-xl font-bold text-[#2980b9]">۴.۸/۵</div>

              <div className="text-sm text-gray-600">میانگین رضایت مشتری</div>
            </div>

            <div className="squircle border-gray-300 flex flex-col gap-2 justify-center w-40 bg-gray-100 items-center">
              <GoShieldCheck fontSize={32} className="" />

              <div className="text-xl font-bold text-[#2980b9]">۱۰۰</div>

              <div className="text-sm text-gray-600">محصول با کیفیت</div>
            </div>

            <div className="squircle border-gray-300 flex flex-col gap-2 justify-center w-40 bg-gray-100 items-center">
              <BsBoxSeam fontSize={32} className="" />

              <div className="text-xl font-bold text-[#2980b9]">۱۰۰</div>

              <div className="text-sm text-gray-600">سفارش موفق</div>
            </div>

            <div className="flex squircle flex-col border-gray-300 gap-2 justify-center w-40 bg-gray-100 items-center">
              <SlEmotsmile fontSize={32} className="" />

              <div className="text-xl font-bold text-[#2980b9]">۱۰۰</div>

              <div className="text-sm text-gray-600">مشتری راضی</div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <img src={about} className="lg:w-full h-auto max-h-100 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
