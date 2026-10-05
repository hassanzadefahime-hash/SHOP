import { useState } from "react";
import { Link } from "react-router-dom";

import {
  useGetAllArticleQuery,
  useGetAllCategoryQuery,
  useGetAllProductsQuery,
} from "../slices/productApi";

import { TbArticle, TbCategory } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";
import {
  MdOutlineLocalOffer,
  MdOutlineWebAsset,
} from "react-icons/md";

import SwiperDesign from "./PromoSlider";
import ArticleCard from "./ArticleCard";
import NewProductCard from "./NewProductCard";
import HeroSection from "./HeroSection";
import OfferProductCard from "./OfferProductCard";

const Home = () => {
  const { data: products } = useGetAllProductsQuery();
  const { data } = useGetAllCategoryQuery();
  const [group, setGroup] = useState("");
  const { data: articles } = useGetAllArticleQuery();

  const offerProduct = products?.filter(
    (product) => product.discount > 0
  );

  return (
    <>
      <HeroSection />

      <div className="md:w-[80%] w-[90%] mx-auto mt-16">
        <div className="flex gap-3 items-center mb-10">
          <TbCategory fontSize={28} />
          <p className="text-2xl">دسته بندی محصولات</p>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 lg:gap-4 md:gap-2 gap-2 mb-12">
          {data?.map((item) => (
            <Link
              to={`/group/${item.id}`}
              className="aspect-square"
              key={item.id}
            >
              <button
                className="lg:h-[100%] w-full h-full relative bo flex flex-col md:gap-1 gap-2 justify-center items-center aspect-square"
                onClick={() => setGroup(item.id)}
              >
                <img
                  className="lg:h-[100%] w-full h-full absolute"
                  src={`http://localhost:9000/images/${item.pic}`}
                />

                <div
                  className="text-black bg-white absolute h-full w-full pt-4 flex justify-center items-center text-lg"
                  style={{
                    background:
                      "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                >
                  <div className="absolute bottom-0 flex justify-between items-center w-full md:px-3 px-1 pb-2">
                    <span className="px-1 text-white md:text-base text-sm">
                      {item.name}
                    </span>

                    <FaAngleLeft className="bg-white rounded-full p-1" />
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-3 items-center">
            <MdOutlineLocalOffer fontSize={28} />
            <p className="text-2xl">پیشنهادهای ویژه</p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-lg">مشاهده همه</p>
            <FaAngleLeft fontSize={14} />
          </div>
        </div>
      </div>

      <div className="md:w-[80%] w-[95%] mx-auto mb-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
          {offerProduct?.slice(0, 4).map((product) => (
            <OfferProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>

      <SwiperDesign />

      <div className="md:w-[80%] w-[95%] mx-auto">
        <div className="flex items-center justify-between mb-10 mt-16">
          <div className="flex gap-3 items-center">
            <MdOutlineWebAsset fontSize={28} />
            <p className="text-2xl">جدیدترین محصولات</p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-lg">مشاهده همه</p>
            <FaAngleLeft fontSize={14} />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
          {products?.slice(0, 4).map((product) => (
            <NewProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <div className="w-[80%] mx-auto my-20">
        <div className="flex items-center justify-between mb-8 mt-16">
          <div className="flex gap-3 items-center">
            <TbArticle fontSize={28} />
            <p className="text-2xl">آخرین مقالات</p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-lg">مشاهده همه</p>
            <FaAngleLeft fontSize={14} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {articles?.slice(0, 2).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;