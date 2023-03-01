import "./App.css";
import React, { useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/Product/ProductList";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showProduct, setShowProduct] = useState(true);

  const ProductClick = () => {
    setShowProduct(true);
  };

  const cartClick = () => {
    setShowProduct(false);
  };

  return (
    <div className="App">
      <Provider store={store}>
        <NavBar ProductClick={ProductClick} cartClick={cartClick} />
        {showProduct ? <ProductList /> : <Cart />}
      </Provider>
    </div>
  );
}

export default App;
