//Import components
import "../i18n";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "src/components/pages/ProductCard.jsx";

import { getAllProducts } from "../store/slices/home";
import { useDispatch, useSelector } from "react-redux";

//Import Styles
import "src/assets/styles/pages/Home.scss";

//Import images
import BilinskaJaterniGrad from "/images/BilinskaJaterniGrad.webp";
import BilinskaZaludecniGrad from "/images/BilinskaZaludecniGrad.webp";
import BilinskaKiselkaGrad from "/images/BilinskaKiselkaGrad.webp";
import Flowers from "src/assets/images/Flowers.webp";
import ThreeFlowers from "src/assets/images/ThreeFlowers.webp";
import TwoFlowers from "src/assets/images/TwoFlowers.webp";
import OneFlower from "src/assets/images/OneFlower.webp";
import PhonCall from "src/components/pages/PhonCall.jsx";

export default function Home() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(undefined);
  const dispatch = useDispatch();

  const productsRequest = useSelector((state) => state.home.products);
  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    console.log(productsRequest);
    setProducts(productsRequest);
  }, [productsRequest]);

  return (
    <main>
      {!loading ? (
        <div className="home-div">
          <div className="items-img">
            {products ? (
              products.map((item) => (
                <div key={item.id}>
                  <ProductCard product={item} />
                </div>
              ))
            ) : (
              <p>Товары не найдены</p>
            )}
          </div>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
      <div className="center-image">
        <div>
          <div className="text-zone">{t("wantWater")}</div>
          <div className="contact-zone">
            <div>
              <span className="call">{t("calling")}</span>
              <PhonCall></PhonCall>
            </div>
            <span className="ili">{t("or")}</span>
            <NavLink to="/order">
              <span className="form-comanda">{t("createForma")}</span>
            </NavLink>
          </div>
        </div>
        <img src={BilinskaZaludecniGrad} alt="none image" />
        <img src={BilinskaKiselkaGrad} alt="none image" />
        <img src={BilinskaJaterniGrad} alt="none image" />
      </div>
      <div className="pre-footer">
        <div className="strings">
          <span>{t("doYouKnow")}</span>
          <NavLink to="/news">
            <div className="all-news">{t("allNews")}</div>
          </NavLink>
        </div>
        <div className="info-blog">
          <div className="left-side">
            <div>
              <NavLink to="/news">
                <img className="left-image" src={Flowers} alt="none image" />
              </NavLink>
            </div>
            <div className="comment-img">
              <div>{t("blog")}</div>
              <div>Zajecicka Horka - {t("magic")}</div>
              <span className="data-img">28 {t("december")} 2021</span>
            </div>
          </div>
          <div className="right-side">
            <div className="right-blog">
              <div>
                <NavLink to="/news">
                  <img src={OneFlower} alt="none image" />
                </NavLink>
              </div>
              <div className="right-blog-info">
                <div>{t("blog")}</div>
                <div>Bilinska Kyselka - {t("WhatforWhenHow")}</div>
                <div>28 {t("december")} 2021</div>
              </div>
            </div>
            <div className="right-blog">
              <div>
                <NavLink to="/news">
                  <img src={TwoFlowers} alt="none image" />
                </NavLink>
              </div>
              <div className="right-blog-info">
                <div>{t("blog")}</div>
                <div>{t("healing")}</div>
                <div>28 {t("december")} 2021</div>
              </div>
            </div>
            <div className="right-blog">
              <div>
                <NavLink to="/news">
                  <img src={ThreeFlowers} alt="none image" />
                </NavLink>
              </div>
              <div className="right-blog-info">
                <div>{t("blog")}</div>
                <div>{t("codiv")}</div>
                <div>28 {t("december")} 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
