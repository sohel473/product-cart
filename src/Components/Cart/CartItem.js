import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/Product/actions";

export default function CartItem(props) {
  const { item } = props;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      {/* <!-- Cart Item --> */}
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={item.image} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{item.name}</h4>
            <p className="lws-cartCategory">{item.category}</p>
            <p>
              GBP <span className="lws-cartPrice">{item.price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              onClick={handleIncrement}
              disabled={item.quantity === item.maxQuantity ? true : false}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{item.quantity}</span>
            <button
              className="lws-decrementQuantity"
              onClick={handleDecrement}
              disabled={item.quantity === 1 ? true : false}
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">
            GBP{" "}
            <span className="lws-calculatedPrice">
              {item.price * item.quantity}
            </span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart" onClick={handleRemove}>
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {/* <!-- Cart Items Ends --> */}
    </>
  );
}
