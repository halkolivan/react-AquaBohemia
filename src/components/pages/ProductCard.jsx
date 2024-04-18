//Import components
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

//Import images
import Star from "src/assets/images/Star.png";

export default function ProductCard({ product }) {
  const [t] = useTranslation();
  return (
    <div className={"block-product " + product.border}>
      <div className={"img-water " + product.background}>
        {product.id === 3 ? (
          <NavLink to="/popular">
            <span className="popular">{t("popular")}</span>
          </NavLink>
        ) : undefined}
        {product.id === 4 ? (
          <NavLink to="/new">
            <span className="new">{t("new")}</span>
          </NavLink>
        ) : undefined}
        <NavLink to={"/about-water/" + product.id}>
          <img
            className={"bottle-water " + product.size}
            src={product.imageBottle}
            alt="none image"
          />
        </NavLink>
        <img src={product.imageBase} alt="none image" />
      </div>
      <div className="texts-image">
        <div>
          {Array.from({ length: product.rank }).map((item, index) => (
            <img src={Star} key={index} alt="none image" />
          ))}
          <span>{product.rank}/10</span>
        </div>
        <div className="title-product">{product.name}</div>
        <div className="zones-comment">
          {product[i18n.language].descriptionHome}
        </div>
      </div>
    </div>
  );
}
