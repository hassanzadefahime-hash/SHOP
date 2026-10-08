import { HiOutlineLogin } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import CustomNumeralNumericFormat from "../CustomNumeralNumericFormat";
import pic from "../../assets/images/logo.png";
import { useSelector } from "react-redux";

import SearchBox from "./SearchBox";

const DesktopHeader = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="shadow-md z-10 md:inline hidden">
      <div className="w-full flex justify-between mx-auto pt-2 lg:px-14 md:px-1">
        <div className="w-1/4">
          <div className="flex">
            <Link className="h-full">
              <img src={pic} width={120} className="pt-0" alt="لوگو" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-1/2">
          <div className="w-3/4 flex relative items-center">
            <SearchBox />
          </div>
        </div>

        <div className="flex items-center justify-end lg:gap-8 md:gap-4 w-1/4">
          <div className="border border-gray-300 px-2 py-1.5 flex justify-center items-center gap-2">
            <Link to="/signin">ورود | ثبت نام</Link>
            <HiOutlineLogin fontSize={24} />
          </div>

          <div>
            <Link to="cart" className="relative">
              <IoCartOutline fontSize={38} />

              {cart.cartItems.length !== 0 && (
                <div className="absolute top-0 right-0 text-sm text-white bg-[#2980b9] text-gray-900 font-semibold rounded-full md:h-5.5 md:w-5.5 flex items-center justify-center transform translate-x-2 -translate-y-1">
                  <CustomNumeralNumericFormat
                    value={cart.cartTotalQty}
                    thousandSeparator=","
                  />
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border-b-1 border-gray-300">
        <div className="flex items-center py-6">
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/products"
                style={({ isActive }) => ({
                  color: isActive ? "#2980b9" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                <p className="text-lg">فروشگاه</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="contactus"
                style={({ isActive }) => ({
                  color: isActive ? "#2980b9" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                <p className="text-lg">تماس با ما</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="aboutus"
                style={({ isActive }) => ({
                  color: isActive ? "#2980b9" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                <p className="text-lg">درباره ما</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/article"
                style={({ isActive }) => ({
                  color: isActive ? "#2980b9" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                <p className="text-lg">خواندنی ها</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DesktopHeader;
