import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { addToCart } from "../slices/cartSlice";

const AddToCart = ({ product }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const updateQty = (value) => {
    setQty(Number(value));
  };

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full flex-col gap-4">
        <div className="flex flex-col items-start space-y-1">
          <div className="flex flex-row md:h-10 h-6 rounded-lg relative bg-transparent mt-1 quantity">
            <button
              data-action="increment"
              onClick={() => updateQty(Number(qty + 1))}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto md:text-2xl text-base font-thin">
                +
              </span>
            </button>

            <input
              className="focus:outline-none text-center md:w-10 w-5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
              name="quantity"
              inputMode="numeric"
              id="quantity"
              min="1"
              step="1"
              value={qty}
              onChange={(e) => updateQty(Number(e.target.value))}
            ></input>

            <button
              disabled={Number(qty) === 1}
              data-action="decrement"
              onClick={() => updateQty(Number(qty - 1))}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto md:text-2xl text-base font-thin">
                −
              </span>
            </button>
          </div>
        </div>

        <div className="text-green-500 text-lg flex items-center gap-2">
          <FaCheck />
          <p>موجود در انبار</p>
        </div>
      </div>

      <button
        className="flex gap-2 bg-gradient-to-r from-[#2a5298] to-[#2a5298] items-center justify-center block lg:mx-auto mx-auto py-2.5 px-8.5 mt-8 text-[#eee] rounded-lg"
        aria-label="cart-button"
        onClick={() => handleAddToCart({ ...product, cartQty: qty })}
      >
        <p className="text-lg">افزودن به سبد خرید</p>
        <IoCartOutline fontSize={25} className="pb-1" />
      </button>
    </div>
  );
};

export default AddToCart;