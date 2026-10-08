import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "../CustomNumeralNumericFormat";
import pic from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import SearchBox from "./SearchBox";

const MobileHeader = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="block md:hidden">
      <div className="flex flex-col justify-between gap-1 w-[90%] mx-auto">
        <div className="flex py-4 justify-between items-center w-full">
          <div>
            <Link className="h-full">
              <img src={pic} width={120} alt="لوگو" />
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <div className="border border-gray-300 rounded-md px-2 py-1.5">
              <Link to="cart" className="relative">
                <IoCartOutline fontSize={28} />

                {cart.cartItems.length !== 0 && (
                  <div className="absolute top-0 right-0 text-xs text-white bg-[#2980b9] text-gray-900 font-semibold rounded-full h-4.5 w-4.5 flex items-center justify-center transform translate-x-3 -translate-y-2">
                    <CustomNumeralNumericFormat
                      value={cart.cartTotalQty}
                      thousandSeparator=","
                    />
                  </div>
                )}
              </Link>
            </div>

            <div className="border border-gray-300 rounded-md px-2 py-1.5">
              <IoPersonOutline fontSize={24} />
            </div>

            <div>
              <RxHamburgerMenu fontSize={24} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full pb-4">
          <div className="flex relative items-center w-full z-500">
            <SearchBox />
          </div>
        </div>
      </div>

      <div className="py-2 bg-white border-t-1 border-gray-200 fixed bottom-0 right-0 left-0 z-10000">
        <div className="flex justify-around">
          <div className="flex flex-col gap-1 items-center">
            <GoHome fontSize={22} />
            <p className="text-sm">خانه</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <TbCategory fontSize={22} />
            <p className="text-sm">دسته بندی</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <IoPersonOutline fontSize={22} />
            <p className="text-sm">سبد خرید</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <IoPersonOutline fontSize={22} />
            <p className="text-sm">پروفایل</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
