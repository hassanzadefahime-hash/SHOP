import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { IoCartOutline } from "react-icons/io5";

import {
  getTotals,
} from "../../slices/cartSlice";


import CartMobile from "../CartMobile";
import EmptyCart from "../EmptyCart";
import CartItems from "../cart/CartItems";
import CartSummary from "../cart/CartSummary";

const CartDesktop = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  return (
    <div className="container mx-auto min-h-screen">
      {" "}
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
            <div className="py-8 flex md:gap-3 gap-1 pr-2">
              <IoCartOutline fontSize={26} />
              <p className="md:text-2xl text-lg">سبد خرید</p>
            </div>

            <div className="flex md:flex-row flex-col gap-4 mx-auto items-start justify-center">
              <CartItems />

              <CartSummary />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDesktop;
