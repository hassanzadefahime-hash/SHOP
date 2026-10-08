import { useSelector } from "react-redux";

import { FaChevronLeft } from "react-icons/fa6";

import CustomNumeralNumericFormat from "../CustomNumeralNumericFormat";

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="border-1 border-gray-300 md:w-[32%] w-full rounded-2xl px-8 py-8 flex flex-col gap-5">
      <p className="text-xl font-bold md:text-base text-sm">خلاصه سفارش</p>

      <div className="flex justify-between">
        <p className="text-gray-500 md:text-base text-sm">تعداد محصولات :</p>
        <p className="md:text-base text-sm">{cart.cartTotalQty}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-500 md:text-base text-sm">مجموع قیمت :</p>
        <p className="md:text-base text-sm">
          <CustomNumeralNumericFormat
            value={cart.cartTotalAmount}
            thousandSeparator=","
            suffix={` تومان `}
          />
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-500 md:text-base text-sm">هزینه ارسال :</p>
        <p className="md:text-base text-sm">
          <CustomNumeralNumericFormat
            value={0}
            thousandSeparator=","
            suffix={` تومان `}
          />
        </p>
      </div>

      <span className="border-b-2 border-gray-200"></span>

      <div className="flex justify-between">
        <p className="text-gray-500 md:text-base text-sm">
          مجموع قابل پرداخت :
        </p>
        <p className="md:text-base text-sm">
          <CustomNumeralNumericFormat
            value={cart.cartTotalAmount}
            thousandSeparator=","
            suffix={` تومان `}
          />
        </p>
      </div>

      <button className="bg-[#2980b9] text-white md:text-lg text-sm rounded-xl py-2 w-full flex items-center justify-center gap-2">
        <p>ثبت سفارش</p>
        <FaChevronLeft fontSize={12} />
      </button>
    </div>
  );
};
export default CartSummary;
