import "../i18n";
import { useState } from "react";
import { useEffect } from "react";
import ProductPopular from "src/components/pages/productPopular.jsx";

import { getPopularProducts } from "../store/slices/popular";
import { useDispatch, useSelector } from "react-redux";

//Import Styles
import "src/assets/styles/pages/Popular.scss";

export default function Popular() {
  const [products, setProducts] = useState(undefined);
  const dispatch = useDispatch();

  const popularRequest = useSelector((state) => state.popular.products);

  const loading = useSelector((state) => state.popular.loading);

  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  useEffect(() => {
    console.log(popularRequest);
    setProducts(popularRequest);
  }, [popularRequest]);

  return (
    <div className="general">
      {!loading ? (
        <div className="products">
          {products ? (
            products.map((item) => (
              <div key={item.id}>
                <ProductPopular product={item} />
              </div>
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      ) : (
        <p>Загрузки...</p>
      )}
    </div>
  );
}
