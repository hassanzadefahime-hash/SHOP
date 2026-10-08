import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { HiXMark } from "react-icons/hi2";

import {
  addToCart,
  removeFromCart,
  decreaseCart,
} from "../../slices/cartSlice";

import CustomNumeralNumericFormat from "../CustomNumeralNumericFormat";
import QtyInput from "../common/Qtyinput";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    <div className="md:w-[70%] w-full">
      {cart.cartItems.map((item) => (
        <div
          className="border-1 border-gray-300 grid grid-cols-3 rounded-2xl overflow-hidden mb-4"
          key={item.id}
        >
          <div>
            <img
              src={`http://localhost:9000/images/${item.sticker}`}
              alt={item.title}
              height={185}
              width={190}
              className="hidden sm:inline-flex"
            />
          </div>

          <div className="flex flex-col py-6 justify-between">
            <div className="flex gap-3 flex-col">
              <Link
                to={`/products/${item.id}`}
                className="pt-1 hover:text-palette-dark text-xl"
              >
                {item.title}
              </Link>

              <p className="text-gray-600 line-clamp-1">{item.description}</p>
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
              onClick={() => handleRemoveFromCart(item)}
            >
              <HiXMark />
            </button>

            <QtyInput
              qty={item.cartQty}
              decrementQty={() => handleDecreaseCart(item)}
              incrementQty={() => handleAddToCart(item)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartItems;
