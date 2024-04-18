//Import components
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

//Import images
import Star from "src/assets/images/Star.png";

export default function ProductPopular({ product }) {
  const { t } = useTranslation();
  return (
    <div className={"product-info " + product.border}>
      <div className={"product-info-image " + product.background}>
        {product.id === 4 ? (
          <img className="flower" src={product.imageFlower} />
        ) : undefined}
        <NavLink to="/new">
          {product.id === 4 ? (
            <span className="new">{t("new")}</span>
          ) : undefined}
        </NavLink>
        <NavLink to={"/about-water/" + product.id}>
          <img
            className={"product-bottle-water " + product.size}
            src={product.imageBottle}
            alt="none image"
          />
        </NavLink>
        <img className="base" src={product.imageBase2} alt="none image" />
      </div>
      <div className="product-info-comment">
        <div className="product-stars">
          {Array.from({ length: product.rank }).map((item, index) => (
            <img src={Star} key={index} alt="none image" />
          ))}
          <span>{product.rank}/10</span>
        </div>
        <div className="product-title">{product.name}</div>
        <div className="product-comment">
          {product[i18n.language].descriptionHome}
        </div>
      </div>
    </div>
  );
}
