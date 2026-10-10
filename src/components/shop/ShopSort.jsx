import { FaSortAmountUpAlt } from "react-icons/fa";

const ShopSort = ({ setGroupId, setSort, sort }) => {
  return (
    <>
      <div className="flex lg:gap-3 md:gap-2 gap-2 flex-wrap md:mb-8 mb-6 items-center">
        <div className="flex gap-2 items-center font-bold text-lg">
          <FaSortAmountUpAlt />
          <p>مرتب سازی :</p>
        </div>

        <button
          onClick={() => {
            setGroupId(null);
            setSort("");
          }}
          className={
            sort === ""
              ? " px-3 py-1.5 rounded-full border-1 border-[#2980b9] md:text-base text-sm text-[#2980b9] bg-[#EAF4FA]"
              : " px-3 py-1.5 rounded-full border-1 border-gray-400 md:text-base text-sm "
          }
        >
          همه محصولات
        </button>

        <button
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
    </>
  );
};
export default ShopSort;
