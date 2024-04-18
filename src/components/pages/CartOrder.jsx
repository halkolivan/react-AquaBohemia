import { NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// Import images
import cartDelete from "src/assets/images/cartDelete.png";
import Star from "src/assets/images/Star.png";

export default function CartOrder({
  products,
  handleIncrement,
  handleDecrement,
  deleteFromCart,
}) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="cart-info">
        <div className={"cart-list-image " + products.background}>
          <NavLink to={"/about-catalog/" + products.id}>
            <img
              className={products.position}
              src={products.imageBottle}
              alt="none image"
            />
          </NavLink>
          <img src={products.imageBase} alt="none image" />
          <button
            className="base-image"
            onClick={() => deleteFromCart(products)}
          >
            <img src={cartDelete} alt="none image" />
          </button>
          <button className="buy">{t("buy")}</button>
        </div>
        <div className="product-info-param">
          <div className="product-stars">
            {Array.from({ length: products.rank }).map((item, index) => (
              <img src={Star} key={index} alt="none image" />
            ))}
            <span>{products.rank}/10</span>
          </div>
          <div className="product-title">
            <span>{products.name}</span>
            <span className="product-type">{products[i18n.language].type}</span>
          </div>
        </div>
        <div className="count">
          <p>{t("count")}</p>
          <button className="increace" onClick={handleIncrement}>
            +
          </button>
          <span>{products.count}</span>
          <button className="decreace" onClick={handleDecrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
