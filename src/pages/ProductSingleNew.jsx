import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AboutWaterNew from "./AboutWaterNew";

export default function ProductSingle() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [productsNew, setProductsNew] = useState(undefined);

  useEffect(() => {
    fetch("/mock/productsData.json")
      .then((response) => {
        return response.json();
      })
      .then((productsData) => {
        const currentProduct = productsData.productsNew.find(
          (item) => item.id === Number(id)
        );

        const langText = Object.assign({}, currentProduct);
        langText.descriptionHome = langText[i18n.language].descriptionHome;
        langText.descriptionAboutProduct =
          langText[i18n.language].descriptionAboutProduct;
        setProductsNew(langText);
      });
  }, []);

  return productsNew && <AboutWaterNew productNew={productsNew} />;
}
