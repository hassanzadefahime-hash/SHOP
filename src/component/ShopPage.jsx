import { useState } from "react";
import { useSelector } from "react-redux";

import { FaSortAmountUpAlt } from "react-icons/fa";
import { RiSortAsc } from "react-icons/ri";

import {
  useGetAllCategoryQuery,
  useGetAllProductsQuery,
} from "../slices/productApi";

import ProductCard from "./ProductCard";
import OfferProductCard from "./OfferProductCard";

const ShopPage = () => {
  const { status } = useSelector((state) => state.products);
  const { data: groupList } = useGetAllCategoryQuery();
  const [sort, setSort] = useState("");
  const { data } = useGetAllProductsQuery();
  const [groupId, setGroupId] = useState(null);

  let sortedProducts = [...(data || [])];

  // اول فیلتر دسته‌بندی
  if (groupId !== null) {
    sortedProducts = sortedProducts.filter(
      (product) => Number(product.groupId) === Number(groupId)
    );
  }

  // بعد مرتب‌سازی
  if (sort === "low") {
    sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  // محصولات تخفیف‌دار
  if (sort === "offer") {
    sortedProducts = sortedProducts.filter(
      (product) => Number(product.discount) > 0
    );
  }

  return (
    <>
      <div className="flex w-[95%] gap-8 mx-auto items-start">
        <div className="lg:w-[20%] w-[10%] mx-auto my-20 sticky top-4 border-1 border-gray-300 lg:block hidden rounded-xl flex flex-col text-xl p-4">
          <div className="flex gap-2 border-b-1 border-gray-300 pb-3">
            <RiSortAsc />
            <p>فیلتر محصولات</p>
          </div>

          <ul className="flex flex-col gap-2 text-lg pt-3">
            {groupList?.map((group) => (
              <li key={group.id}>
                <button onClick={() => setGroupId(group.id)}>
                  {group.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-[80%] w-[90%] mx-auto my-20">
          <div className="flex lg:gap-3 md:gap-2 gap-2 flex-wrap md:mb-8 mb-6 items-center">
            <div className="flex gap-2 items-center font-bold text-lg">
              <FaSortAmountUpAlt />
              <p>مرتب سازی :</p>
            </div>

            <button
              value="low"
              onClick={() => setGroupId(null)}
              className={
                sort === ""
                  ? " px-3 py-1.5 rounded-full border-1 border-[#2980b9] md:text-base text-sm text-[#2980b9] bg-[#EAF4FA]"
                  : " px-3 py-1.5 rounded-full border-1 border-gray-400 md:text-base text-sm "
              }
            >
              همه محصولات
            </button>

            <button
              value="low"
              onClick={() => setSort("low")}
              className={
                sort === "low"
                  ? " px-3 py-1.5 rounded-full border-1 border-[#2980b9] md:text-base text-sm text-[#2980b9] bg-[#EAF4FA]"
                  : " px-3 py-1.5 rounded-full border-1 border-gray-400 md:text-base text-sm "
              }
            >
              ارزان‌ ترین
            </button>

            <button
              value="high"
              onClick={() => setSort("high")}
              className={
                sort === "high"
                  ? " px-3 py-1.5 rounded-full border-1 border-[#2980b9] md:text-base text-sm text-[#2980b9] bg-[#EAF4FA]"
                  : " px-3 py-1.5 rounded-full border-1 border-gray-400 md:text-base text-sm "
              }
            >
              گران‌ ترین
            </button>

            <button
              value="offer"
              onClick={() => setSort("offer")}
              className={
                sort === "offer"
                  ? " px-3 py-1.5 rounded-full border-1 border-[#2980b9] md:text-base text-sm text-[#2980b9] bg-[#EAF4FA]"
                  : " px-3 py-1.5 rounded-full border-1 border-gray-400 md:text-base text-sm "
              }
            >
              تخفیف ها
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-4 gap-2">
            {status === "success" ? (
              <>
                {sortedProducts.map((product, index) =>
                  product.discount > 0 ? (
                    <OfferProductCard
                      product={product}
                      key={index}
                    />
                  ) : (
                    <ProductCard
                      product={product}
                      key={index}
                    />
                  )
                )}
              </>
            ) : status === "pending" ? (
              <p>در حال بارگذاری ...</p>
            ) : (
              <p>مشکلی پیش اومده</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;