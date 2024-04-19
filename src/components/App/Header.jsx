//Import components
import "../../i18n";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// Import images
import Logo from "src/assets/images/Logo.webp";
import Menu from "src/assets/images/Menu.png";
import cart2 from "src/assets/images/cart2.png";

//Import styles
import "src/assets/styles/app/header.scss";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const currentCountProducts = useSelector((state) => state.cart.count);

  return (
    <div className="header">
      <div className="left-menu">
        <div className="borders" onClick={() => setOpen(!isOpen)}>
          <img src={Menu} alt="none image" />
        </div>
        <div className={`left-menu-position ${isOpen ? "open-menu" : ""}`}>
          <NavLink to="/catalog">
            <span className="left-menu-text">
              <b>{t("catalog")}</b>
            </span>
          </NavLink>
          <NavLink to="/news">
            <span className="left-menu-text">
              <b>{t("news")}</b>
            </span>
          </NavLink>
          <NavLink to="/contacts">
            <span className="left-menu-text">
              <b>{t("contacts")}</b>
            </span>
          </NavLink>
        </div>
      </div>
      <div className="image-center">
        <NavLink to="/">
          <img src={Logo} alt="none image" />
        </NavLink>
      </div>
      <div className="right-menu">
        <NavLink to="/cart">
          <div>{currentCountProducts}</div>
          <img src={cart2} alt="non image" />
        </NavLink>
        <div className="Ru" onClick={() => changeLanguage("ru")}>
          <span>Ru</span>
        </div>
        <div className="Ro" onClick={() => changeLanguage("ro")}>
          <span>Ro</span>
        </div>
      </div>
    </div>
  );
}
