import { FaAngleLeft } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { useGetAllProductsQuery } from "../../slices/productApi";

import NewProductCard from "../NewProductCard";

const HomeProducts = () => {
  const { data: products } = useGetAllProductsQuery();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
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
          <NewProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HomeProducts;
