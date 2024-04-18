import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AboutWater from "./AboutWater";

export default function ProductSingle() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    fetch("/mock/productsData.json")
      .then((response) => {
        return response.json();
      })
      .then((productsData) => {
        const currentProduct = productsData.products.find(
          (item) => item.id === Number(id)
        );

        const langText = Object.assign({}, currentProduct);
        langText.descriptionHome = langText[i18n.language].descriptionHome;
        langText.descriptionAboutProduct =
          langText[i18n.language].descriptionAboutProduct;
        setProducts(langText);
      });
  }, []);

  return products && <AboutWater product={products} />;
}
