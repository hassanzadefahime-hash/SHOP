import { FaAngleLeft } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useGetAllProductsQuery } from "../../slices/productApi";
import OfferProductCard from "../OfferProductCard";

const HomeOffers = () => {
  const { data: products } = useGetAllProductsQuery();
  const offerProduct = products?.filter((product) => product.discount > 0);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <MdOutlineLocalOffer fontSize={28} />
          <p className="text-2xl">پیشنهادهای ویژه</p>
        </div>

        <div className="flex gap-1 items-center">
          <p className="text-lg">مشاهده همه</p>
          <FaAngleLeft fontSize={14} />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
        {offerProduct?.slice(0, 4).map((product) => (
          <OfferProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default HomeOffers;
