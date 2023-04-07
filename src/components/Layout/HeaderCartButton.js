import { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [isBtnHighlited, setIsBtnHighlited] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    console.log("here");
    return curNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    isBtnHighlited ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsBtnHighlited(true);

    const timer = setTimeout(() => {
      setIsBtnHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button
      className={buttonClasses}
      onClick={() => {
        props.cartHandler(true);
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
