import React from "react";
import logo from "../../src/assets/images/logo.png";
import { useSelector } from "react-redux";

export default function NavBar(props) {
  const { ProductClick, cartClick } = props;

  const cart = useSelector((state) => state.product.cart);

  const totalCart = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <button onClick={ProductClick}>
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </button>

          <div className="flex gap-4">
            <button
              className="navHome"
              id="lws-home"
              onClick={ProductClick}
            >
              {" "}
              Home{" "}
            </button>
            <button className="navCart" id="lws-cart" onClick={cartClick}>
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{totalCart}</span>
            </button>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar ends --> */}
    </div>
  );
}
