//Import components
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";


//Import images
import Star from "src/assets/images/Star.png";
import cart2 from "src/assets/images/cart2.png";

export default function ProductCatalog({ productItems, addToCart }) {
  
  return (
    <div className="product-info">
      <div className={"product-list-image " + productItems.background}>
        <NavLink to={"/about-catalog/" + productItems.id}>
          <img
            className={productItems.position}
            src={productItems.imageBottle}
            alt="none image"
          />
        </NavLink>
        <img src={productItems.imageBase} alt="none image" />

        {/* Кнопка добавления товара в корзину */}

        <button onClick={() => addToCart(productItems)}>
          <img src={cart2} alt="none image" />
        </button>
      </div>
      <div className="product-info-param">
        <div className="product-stars">
          {Array.from({ length: productItems.rank }).map((item, index) => (
            <img src={Star} key={index} alt="none image" />
          ))}
          <span>{productItems.rank}/10</span>
        </div>
        <div className="product-title">
          <span>{productItems.name}</span>
          <span className="product-type">
            {productItems[i18n.language].type}
          </span>
        </div>
        <span className="product-comment">
          {productItems[i18n.language].description}
        </span>
      </div>
    </div>
  );
}
