import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AboutCatalog from "./AboutCatalog";

export default function ProductSingleCatalog() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [productsCatalog, setProductsCatalog] = useState(undefined);

  useEffect(() => {
    fetch("/mock/productsData.json")
      .then((response) => {
        return response.json();
      })
      .then((productsData) => {
        const currentProduct = productsData.productsCatalog.find(
          (item) => item.id === Number(id)
        );

        const langText = Object.assign({}, currentProduct);
        langText.descriptionAboutProduct =
          langText[i18n.language].descriptionAboutProduct;
        setProductsCatalog(langText);
      });
  }, []);

  return productsCatalog && <AboutCatalog catalogProducts={productsCatalog} />;
}
