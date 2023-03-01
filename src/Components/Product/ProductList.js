import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import ProductForm from "./ProductForm";

export default function ProductList({ onRouteChange }) {
  const products = useSelector((state) => state.product.products);

  return (
    <div>
      <main className="py-16">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {/* <!-- product item --> */}
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </div>
          {/* <!-- products container ends --> */}
          <div>
            <ProductForm />
          </div>
        </div>
      </main>
    </div>
  );
}
