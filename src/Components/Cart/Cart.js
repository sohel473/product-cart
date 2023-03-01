import React from "react";
import { useSelector } from "react-redux";
import CartBill from "./CartBill";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.product.cart);
  // console.log(cart);

  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-6">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </>
            )}

            {/* <!-- Bill Details --> */}
            <CartBill />
          </div>
        </div>
      </main>
    </div>
  );
}
