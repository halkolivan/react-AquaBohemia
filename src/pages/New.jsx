import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductNew from "src/components/pages/productNew";

import { getNewProducts } from "../store/slices/new";
import { useDispatch, useSelector } from "react-redux";

//Import Styles
import "src/assets/styles/pages/Popular.scss";

export default function New() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [productsNew, setProductsNew] = useState(undefined);

  const newProductsRequest = useSelector((state) => state.new.productsNew);

  const loading = useSelector((state) => state.new.loading);

  useEffect(() => {
    dispatch(getNewProducts());
  }, []);

  useEffect(() => {
    console.log(newProductsRequest);
    setProductsNew(newProductsRequest);
  }, [newProductsRequest]);

  return (
    <div className="general">
      {!loading ? (
        <div className="products">
          {productsNew ? (
            productsNew.map((item) => (
              <div key={item.id}>
                <ProductNew productsNew={item} />
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
