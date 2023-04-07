import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./styles.css";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cart, setCart] = useState(false);
  const cartHandler = (show) => {
    setCart(show);
  };
  return (
    <CartProvider>
      {cart && <Cart cartHandler={cartHandler} />}
      <Header cartHandler={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
