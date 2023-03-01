import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Product/actions";

export default function Product(props) {
  const { product } = props;

  // console.log(product);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ ...product, quantity: 1, maxQuantity: product.quantity })
    );
  };

  return (
    <>
      {/* <!-- product item --> */}
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src={product.image}
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.name}</h4>
          <p className="lws-productCategory">{product.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              GBP <span className="lws-price">{product.price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{product.quantity}</span>
            </p>
          </div>
          {/* disable button when product quantity is zero */}
          <button
            className="lws-btnAddToCart"
            onClick={handleAddToCart}
            disabled={product.quantity === 0 ? true : false}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* <!-- product item ends --> */}
    </>
  );
}
