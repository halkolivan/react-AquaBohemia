import { NavLink } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

//import styls
import "src/assets/styles/pages/AboutWater.scss";

//import images
import CenterImage from "src/assets/images/CenterImage.png";
import Star from "src/assets/images/Star.png";
import Star3 from "public/images/Star3.png";
import Group from "public/images/Group.png";
import Group2 from "public/images/Group2.png";
import Group3 from "public/images/Group3.png";

export default function AboutWater(product) {
  const { t } = useTranslation();

  return (
    <main className="main-box">
      <div className="general-image">
        <img src={CenterImage} width="1920" height="470" alt="none img" />
        <div className={"bottle-product " + product.product.background}>
          <img src={product.product.imageBottle} alt="none img" />
          <img src={product.product.imageBase} alt="none img" />
        </div>
        <div className="text-image-product">
          <div>{product.product.name}</div>
          <div>{t("structure")}</div>
          <div className="stars">
            <span>Rank</span>
            {Array.from({ length: product.product.rank }).map((item, index) => (
              <img src={Star} key={index} alt="none image" />
            ))}
            <span>{product.product.rank}/10</span>
          </div>
        </div>
        <div className="rate-star">
          <div className="rate-product">
            <img src={Star3} alt="none img" />
            <span>{product.product.rank}</span>
          </div>
        </div>
        <div className="Share">
          <span>Share</span>
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={Group} alt="none img" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src={Group2} alt="none img" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Group3} alt="none img" />
            </a>
          </div>
        </div>
      </div>
      <div className="comment-product">
        <div className="order-counts">
          <div className="counts">
            <p>{t("countWater1")}</p>
            <p>{t("countWater2")}</p>
          </div>
          <NavLink to="/orderWater/:id">
            <span className="order-product">
              {t("buy")} {product.product.name}
            </span>
          </NavLink>
        </div>
        <span className="section">{t("titleWater")}</span>
        <div className="description">
          {product.product.name} –<br />
          <span>
            {product.product[i18n.language].descriptionAboutProduct.backStory}
          </span>
          <p>{product.product[i18n.language].location}</p>
          <span>
            {product.product[i18n.language].descriptionAboutProduct.field}
          </span>
          <p>
            {product.product[i18n.language].descriptionAboutProduct.taste}:{" "}
          </p>
          <span>
            {
              product.product[i18n.language].descriptionAboutProduct
                .tasteDescript
            }
          </span>
          <p>
            {
              product.product[i18n.language].descriptionAboutProduct
                .totalStructur
            }
            :
          </p>
          <span>
            {
              product.product[i18n.language].descriptionAboutProduct
                .generalCompos
            }
          </span>
          <p>{product.product[i18n.language].descriptionAboutProduct.exp}:</p>
          <span>
            {product.product[i18n.language].descriptionAboutProduct.expDescript}
          </span>
          <p>{product.product[i18n.language].descriptionAboutProduct.saved}:</p>
          <span>
            {
              product.product[i18n.language].descriptionAboutProduct
                .savedDescript
            }
          </span>
        </div>
      </div>
    </main>
  );
}
