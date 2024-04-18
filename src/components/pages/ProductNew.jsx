//Import components
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";

//Import images
import Star from "src/assets/images/Star.png";

export default function ProductNew({ productsNew }) {
  return (
    <div className={"product-info " + productsNew.border}>
      <div className={"product-info-image " + productsNew.background}>
        <NavLink to={"/about-water-new/" + productsNew.id}>
          <img
            className="product-bottle-water"
            src={productsNew.imageProduct}
            alt="none image"
          />
        </NavLink>
        <img src={productsNew.imageBase2} alt="none image" />
      </div>
      <div className="product-info-comment">
        <div className="product-stars">
          {Array.from({ length: productsNew.rank }).map((item, index) => (
            <img src={Star} key={index} alt="none image" />
          ))}
          <span>{productsNew.rank}/10</span>
        </div>
        <span className="product-title">{productsNew.nameNew}</span>
        <span className="product-type">{productsNew[i18n.language].type}</span>
        <span className="product-comment">
          {productsNew[i18n.language].descriptionNew}
        </span>
      </div>
    </div>
  );
}
