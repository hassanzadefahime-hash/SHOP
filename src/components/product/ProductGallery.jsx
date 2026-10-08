import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { productID } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productID)
  );
  return (
    <div className="lg:w-[35%]">
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
        {" "}
        <SwiperSlide>
          {" "}
          <div className="flex justify-center items-center">
            <img
              src={`http://localhost:9000/images/${product?.sticker}`}
              alt={product?.title}
            />{" "}
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`http://localhost:9000/images/${product?.sticker}`}
            alt={product?.title}
          />
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
          <div className="h-20">
            <img
              src={`http://localhost:9000/images/${product?.sticker}`}
              alt={product?.title}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-20">
          <img
            src={`http://localhost:9000/images/${product?.sticker}`}
            alt={product?.title}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ProductGallery;
