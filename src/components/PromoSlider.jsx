import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bg1 from "../assets/images/slide1.png";
import bg2 from "../assets/images/slide2.png";
import bgmobile from "../assets/images/slide2-mobile.png";
import bgmobile1 from "../assets/images/slide1-mobile.png";

const PromoSlider = () => {
  return (
    <div className="min-h-40 md:h-80 h-35 mx-auto overflow-hidden w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="h-full w-full"
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
      >
        <SwiperSlide className="h-full w-full relative overflow-hidden lg:inner-curve">
          <div className="w-full h-full flex flex-row justify-start items-center">
            <img
              src={bg2}
              className="w-full h-full md:block hidden"
            />

            <img
              src={bgmobile}
              className="w-full h-full md:hidden block"
            />

            <div className="text-white absolute md:w-[60%] w-[60%] md:px-0 px-3 flex justify-center md:items-center items-start flex-col md:gap-4 gap-2">
              <p className="text-white md:text-3xl text-sm">
                تکنولوژی برای زندگی بهتر
              </p>

              <p className="text-white md:text-lg text-xs">
                بهترین برندها ، کیفیت تضمینی، قیمت مناسب
              </p>

              <button className="bg-white text-black md:px-3 md:py-1 px-1 py-0.5 rounded-full block md:text-base text-xs">
                مشاهده محصولات
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full w-full relative overflow-hidden lg:inner-curve">
          <div className="w-full h-full flex flex-row justify-start items-center">
            <img
              src={bg1}
              className="w-full h-full md:block hidden"
            />

            <img
              src={bgmobile1}
              className="w-full h-full md:hidden block"
            />

            <div className="text-white absolute md:w-[60%] w-[60%] md:px-0 px-3 flex justify-center md:items-center items-start flex-col md:gap-4 gap-2">
              <p className="text-white md:text-3xl text-sm">
                تکنولوژی برای زندگی بهتر
              </p>

              <p className="text-white md:text-lg text-xs">
                بهترین برندها ، کیفیت تضمینی، قیمت مناسب
              </p>

              <button className="bg-white text-black md:px-3 md:py-1 px-1 py-0.5 rounded-full block md:text-base text-xs">
                مشاهده محصولات
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromoSlider;

