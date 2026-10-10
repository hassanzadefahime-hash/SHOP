import { useState } from "react";
import { useSelector } from "react-redux";

import {
  useGetAllCategoryQuery,
  useGetAllProductsQuery,
} from "../../slices/productApi";

import ShopProductList from "../shop/ShopProductList";
import ShopSort from "../shop/ShopSort";
import ShopFilters from "../shop/ShopFilters";

const ShopPage = () => {
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
        <ShopFilters
          groupList={groupList}
          setGroupId={setGroupId}
          groupId={groupId}
        />
        <div className="md:w-[80%] w-[90%] mx-auto my-20">
          <ShopSort setGroupId={setGroupId} setSort={setSort} sort={sort} />

          <ShopProductList  sortedProducts={sortedProducts} />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
