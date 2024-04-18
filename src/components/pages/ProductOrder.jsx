//Import components
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

//Import images
import Star from "src/assets/images/Star.png";

export default function ProductCard({ products }) {
  const [t] = useTranslation();
  return (
    <div className={"block-product " + products.border}>
      <div className={"img-water " + products.background}>
        <NavLink to={"/about-water/" + products.id}>
          <img
            className={"bottle-water " + products.size}
            src={products.imageBottle}
            alt="none image"
          />
        </NavLink>
        <img src={products.imageBase} alt="none image" />
      </div>
      <div className="texts-image">
        <div>
          {Array.from({ length: products.rank }).map((item, index) => (
            <img src={Star} key={index} alt="none image" />
          ))}
          <span>{products.rank}/10</span>
        </div>
        <div className="title-product">{products.name}</div>
        <div className="zones-comment">
          {products[i18n.language].descriptionHome}
        </div>
      </div>
    </div>
  );
}
