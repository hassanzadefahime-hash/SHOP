import { Link,NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import pic from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";
import { IoPersonOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { useState } from "react";
import { useGetAllProductsQuery } from "../slices/productApi";

const Header = () => {
  const { cartTotalQty } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const { data: products } = useGetAllProductsQuery();
  const [search, setSearch] = useState("");
  let filteredproducts = products
  ?.filter((product) => product.title.includes(search))

  return (
    <>
      <div className=" shadow-md z-10 md:inline hidden">
        <div className=" w-full flex justify-between mx-auto pt-2 lg:px-14 md:px-1">
          <div className="w-1/4">
            <div className="flex">
              <Link className="h-full">
                <img src={pic} width={120} className="pt-0 " />
              </Link>
            </div>
          </div>

          <div className="  flex items-center justify-center w-1/2">
            <div className="w-3/4 flex relative items-center">
              <div className="absolute end-3 ">
                <IoIosSearch fontSize={26} className="text-gray-500" />
              </div>
              <div className="flex flex-col w-full">
                <input
                  className="bg-gray-100 border-1 border-gray-200 py-2 rounded-full w-full ps-5 pe-10 w-3/4"
                  placeholder="دنبال چی میگردی ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search.length > 0 ? (
                  <ul className="absolute bg-gray-100 border-1 border-gray-200 top-11 w-full overflow-hidden  flex flex-col gap-2 rounded-xl">
                    {search &&
                      filteredproducts.length > 0 ? (filteredproducts.map((pro) => (
                        <Link to={`/products/${pro.id}`} onClick={()=>setSearch("")}>
                          <li className="flex flex-row items-center gap-4 hover:bg-white  transition delay-150 duration-300 ease-in-out">
                            <img
                              className=" w-16 aspect-square object-cover "
                              src={`http://localhost:9000/images/${pro.sticker}`}
                            />{" "}
                            {pro.title}
                          </li>
                        </Link>
                      ))) :(<div className="text-lg text-center py-4">موجود نیست</div>)}
                  </ul>
                  
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-end lg:gap-8 md:gap-4 w-1/4">
            <div className="border  border-gray-300 px-2 py-1.5 flex justify-center items-center gap-2">
              <Link to="/signin">ورود | ثبت نام</Link>
              <HiOutlineLogin fontSize={24} />
            </div>

            <div className="">
              <Link to="cart" className="relative">
                <IoCartOutline fontSize={38} />

                {cart.cartItems.length === 0 ? null : (
                  <div className="absolute top-0 right-0 text-sm text-white bg-[#2980b9] text-gray-900 font-semibold rounded-full md:h-5.5 md:w-5.5 flex items-center justify-center transform translate-x-2  -translate-y-1 ">
                    <CustomNumeralNumericFormat
                      value={cartTotalQty}
                      thousandSeparator=","
                    />
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-b-1 border-gray-300 ">
          <div className="flex items-center py-6">
            <ul className="flex gap-10 ">
              <li>
                <NavLink
                  to={"/products"}
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
                  to={"contactus"}
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
                  to={"aboutus"}
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
                  to={"/article"}
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
      <div className="block md:hidden">
        <div className="flex flex-col  justify-between gap-1 w-[90%] mx-auto">
          <div className="flex py-4 justify-between items-center w-full">
            <div>
              <Link className="h-full">
                <img src={pic} width={120} className="" />
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <div className="border  border-gray-300 rounded-md px-2 py-1.5 ">
                <Link to="cart" className="relative">
                  <IoCartOutline fontSize={28} />

                  {cart.cartItems.length === 0 ? null : (
                    <div className="absolute top-0 right-0 text-xs text-white bg-[#2980b9] text-gray-900 font-semibold rounded-full h-4.5 w-4.5 flex items-center justify-center transform translate-x-3 -translate-y-2">
                      <CustomNumeralNumericFormat
                        value={cartTotalQty}
                        thousandSeparator=","
                      />
                    </div>
                  )}
                </Link>
              </div>

              <div className="border  border-gray-300 rounded-md px-2 py-1.5 ">
                <IoPersonOutline fontSize={24} />
              </div>
              <div className=" ">
                <RxHamburgerMenu fontSize={24} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full pb-4">
            <div className=" flex relative items-center w-full">
              <div className="absolute end-3 ">
                <IoIosSearch fontSize={24} className="text-gray-500" />
              </div>

              <input
                className="bg-gray-50 border-1 border-gray-200 py-2 rounded-full w-full ps-5 pe-10 "
                placeholder="دنبال چی میگردی ..."
              />
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
    </>
  );
};
export default Header;
