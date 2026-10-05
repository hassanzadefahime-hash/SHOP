import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { LuBadgeCheck, LuShieldCheck } from "react-icons/lu";

import "../../src/App.css";

import ProductForm from "./AddToCart";
import Gard from "./ModelSelector";

import CustomNumeralNumericFormat from "../../../STICKER-SHOP/src/components/CustomNumeralNumericFormat";


const ProductDetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { productID } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productID)
  );



  return (
    <>
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col lg:flex-row mt-10 gap-12">
        <div className=" lg:w-[35%] ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#343333",
              "--swiper-navigation-size": "35px",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center  ">
                <img src={`http://localhost:9000/images/${product.sticker}`} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={`http://localhost:9000/images/${product.sticker}`} />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper my-6"
          >
            <SwiperSlide>
              <div className="h-20 ">
                <img
                  src={`http://localhost:9000/images/${product.sticker}`}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-20 ">
              <img src={`http://localhost:9000/images/${product.sticker}`} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full lg:w-[65%] md:pr-6 ">
          <p className="md:text-4xl text-2xl text-bold py-6">
            {product.title}
          </p>

          <ul className="md:text-lg text-base flex gap-3 flex-col">
            <p className="leading-9  mt-6 text-justify">
              قاب سیلیکونی مگ‌سیف با طراحی مینیمال، ساخته‌شده از سیلیکون نرم و
              باکیفیت که علاوه بر محافظت کامل از گوشی، حس لمس بسیار خوبی را
              ارائه می‌دهد. این قاب با شارژرهای MagSafe سازگار بوده و بدون نیاز
              به خارج کردن قاب می‌توانید گوشی خود را شارژ کنید.
            </p>
          </ul>

          <div className="flex py-8 flex-col gap-3">
            {product.discount > 0 ? (
              <p className="text-xl line-through text-gray-500">
                <CustomNumeralNumericFormat
                  value={product.price}
                  thousandSeparator=","
                  numeral
                  numeralSystem="latn"
                />
              </p>
            ) : (
              ""
            )}

            <p className="text-2xl">
              <CustomNumeralNumericFormat
                value={
                  product.price -
                  (product.price * product.discount) / 100
                }
                thousandSeparator=","
                prefix="قیمت : "
                suffix=" تومان "
                numeral
                numeralSystem="latn"
              />
            </p>
          </div>

          <div>
            <Gard />
          </div>

          <div className="w-full mt-8">
            <ProductForm product={product} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  mt-8 mb-6 pt-4"></div>

      <div className="md:w-[80%] w-[90%] mx-auto border border-gray-300 rounded-xl px-8 py-6 mb-4">
        <div className="flex items-center gap-2 mb-8">
          <LuBadgeCheck className=" text-3xl" />

          <h2 className="text-2xl font-bold">ویژگی‌های محصول</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold">
                سازگار با شارژ بی‌سیم و مگ‌سیف
              </p>
            </div>

            <p className="pb-3">
              محافظت مناسب از گوشی در برابر خط‌وخش، ضربه و آسیب‌های روزمره.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold">
                محافظت کامل از لبه‌ها و دوربین
              </p>
            </div>

            <p className="pb-3">
              طراحی برجسته اطراف دوربین و لبه‌های قاب برای محافظت بیشتر.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold">پوشش داخلی میکروفایبر نرم</p>
            </div>

            <p className="pb-3">
              جلوگیری از ایجاد خط‌وخش روی بدنه گوشی در استفاده طولانی‌مدت.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold"> طراحی مینیمال و شیک</p>
            </div>

            <p className="pb-3">
              ظاهر ساده و جذاب، مناسب استفاده روزمره و استایل‌های مختلف.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold"> خوش‌دست و سبک</p>
            </div>

            <p className="pb-3">
              طراحی ارگونومیک برای در دست گرفتن راحت گوشی بدون ایجاد حجم اضافی.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div
                className="w-8 h-8 rounded-2xl
                bg-blue-50/80 backdrop-blur-md
                border border-blue-100
                flex items-center justify-center"
              >
                <LuShieldCheck className="text-[#2980b9] text-2xl" />
              </div>

              <p className="text-xl font-bold"> دسترسی آسان به دکمه‌ها</p>
            </div>

            <li className="pb-3">
              دکمه‌های دقیق و نرم برای استفاده راحت از تمام کلیدهای گوشی.
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;