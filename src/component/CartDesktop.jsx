import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import {
  addToCart,
  getTotals,
  removeFromCart,
  decreaseCart,
} from "../slices/cartSlice";

import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";
import QtyInput from "./common/Qtyinput";
import CartMobile from "./CartMobile";
import EmptyCart from "./EmptyCart";

const CartDesktop = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartTotalQty } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, cartQty: 1 }));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="container mx-auto  min-h-screen ">
      <title>سبد خرید | فروشگاه استیکر</title>

      {cart.cartItems.length === 0 ? (
        <div className="text-center mt-10 h-full">
          <EmptyCart />
        </div>
      ) : (
        <>
          <div className="md:hidden block">
            <CartMobile />
          </div>

          <div className="md:w-[90%] w-[90%] mt-10 mx-auto md:block hidden">
            <div className="py-8 flex  md:gap-3 gap-1 pr-2">
              <IoCartOutline fontSize={26} />
              <p className="md:text-2xl text-lg">سبد خرید</p>
            </div>

            <div className="flex md:flex-row flex-col gap-4 mx-auto items-start justify-center ">
              <div className=" md:w-[70%] w-full">
                {cart.cartItems.map((item, index) => (
                  <div
                    className="border-1 border-gray-300  grid grid-cols-3 rounded-2xl overflow-hidden mb-4"
                    key={index}
                  >
                    <div className="">
                      <img
                        src={`http://localhost:9000/images/${item.sticker}`}
                        alt={item.title}
                        height={185}
                        width={190}
                        className={`hidden sm:inline-flex`}
                      />
                    </div>

                    <div className=" flex flex-col py-6 justify-between ">
                      <div className="flex gap-3 flex-col ">
                        <Link
                          to={`/products/${item.id}`}
                          className="pt-1 hover:text-palette-dark text-xl"
                        >
                          {item.title}
                        </Link>

                        <p className="text-gray-600 line-clamp-1">
                          {item.description}
                        </p>
                      </div>

                      <CustomNumeralNumericFormat
                        value={item.price * item.cartQty}
                        thousandSeparator=","
                        prefix={`قیمت : ‍‍‍`}
                        suffix={` تومان `}
                      />
                    </div>

                    <div className="flex flex-col items-end justify-between md:pl-8 pl-4 md:py-6 py-4">
                      <button
                        aria-label="delete-item"
                        className=""
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <HiXMark />
                      </button>

                      <div className="">
                        <QtyInput
                          qty={item.cartQty}
                          decrementQty={() => handleDecreaseCart(item)}
                          incrementQty={() => handleAddToCart(item)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-1 border-gray-300 md:w-[32%] w-full rounded-2xl px-8 py-8 flex flex-col gap-5">
                <p className=" text-xl font-bold md:text-base text-sm">
                  خلاصه سفارش
                </p>

                <div className="flex justify-between">
                  <p className="text-gray-500 md:text-base text-sm">
                    تعداد محصولات :
                  </p>
                  <p className="md:text-base text-sm">{cartTotalQty}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-500 md:text-base text-sm">
                    مجموع قیمت :
                  </p>
                  <p className="md:text-base text-sm">
                    <CustomNumeralNumericFormat
                      value={cart.cartTotalAmount}
                      thousandSeparator=","
                      suffix={` تومان `}
                    />
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-500 md:text-base text-sm">
                    هزینه ارسال :
                  </p>
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

                <button className="bg-[#2980b9] text-white md:text-lg text-sm rounded-xl py-2 w-full flex  items-center justify-center gap-2">
                  <p>ثبت سفارش</p>
                  <FaChevronLeft fontSize={12} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDesktop;