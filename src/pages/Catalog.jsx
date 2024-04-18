import { useState, useEffect } from "react";



import { getCatalogProducts } from "../store/slices/catalog";
import { addCart } from "../store/slices/cart";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import ProductCatalog from "src/components/pages/ProductCatalog.jsx";

//import style
import "src/assets/styles/pages/Catalog.scss";

export default function Catalog() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [productsCatalog, setProductsCatalog] = useState(undefined);

  const productsCatalogRequest = useSelector(
    (state) => state.catalog.productsCatalog
  );

  const loading = useSelector((state) => state.catalog.loading);

  useEffect(() => {
    dispatch(getCatalogProducts());
  }, []);

  useEffect(() => {
    console.log(productsCatalogRequest);
    setProductsCatalog(productsCatalogRequest);
  }, [productsCatalogRequest]);

  const addToCart = (elem) => {
    dispatch(addCart(elem));
  };

  return (
    <div className="base-catalog">
      <div className="ghid">
        <span>{t("catalog")}</span>
        <span>
          {t("main")} / {t("catalog")}
        </span>
      </div>
      {!loading ? (
        <div className="products">
          {productsCatalog ? (
            productsCatalog.map((item) => (
              <div key={item.id}>
                <ProductCatalog productItems={item} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
