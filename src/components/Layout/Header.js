import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton cartHandler={props.cartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A tables full of delicious food" />
      </div>
    </>
  );
};
export default Header;
