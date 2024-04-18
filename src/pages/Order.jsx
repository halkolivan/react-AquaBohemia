import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useEffect } from "react";
import { getOrderProducts } from "../store/slices/order";
import { deleteOrder } from "../store/slices/order";
import { useDispatch, useSelector } from "react-redux";
import ProductOrder from "src/components/pages/ProductOrder";

//Import Styles
import "src/assets/styles/pages/Order.scss";

// Import images
import Plus from "src/assets/images/plus.png";

export default function Order() {
  const { t } = useTranslation();
  const onChange = () => {};
  const orderRequest = useSelector((state) => state.buyOrder.orderList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderProducts());
  }, []);

  return (
    <main>
      <div className="post-head">
        <span>{t("buy")}</span>
        <span>{t("buyDescription")}</span>
      </div>
      <div className="form-style">
        <form action="">
          <div>
            <div>
              <label for="name">{t("name")}*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Роман"
                required
              />
            </div>
            <div>
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="aqua@mail.ru"
                required
              />
            </div>
            <div>
              <label for="datepicker">{t("serviceTime")}*</label>
              <input type="date" id="datepicker" name="data" required />
            </div>
          </div>
          <div>
            <div>
              <label for="phone">{t("nиmberPhon")}*</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="0 789 37484"
                required
              />
            </div>
            <div>
              <label for="address">{t("Adress")}*</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Кишинёвб ул. Штефан Чел Маре 40"
                required
              />
            </div>
            <div className="Oz">
              <ReCAPTCHA
                sitekey="6LfKmqEpAAAAAP84L-bhB50WiD2oyvJs2DJsdpny"
                onChange={onChange}
              />
              <NavLink to="/error">
                <span>{t("send")}</span>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
      <div className="Vz">
        <div>{t("yoursProducts")}</div>
        <div>
          <img src={Plus} alt="none img" />
          <NavLink to="/catalog">
            <span>{t("addProduct")}</span>
          </NavLink>
        </div>
      </div>
      <div className="products-orders">
        {orderRequest ? (
          orderRequest.map((item) => (
            <div key={item.id}>
              <ProductOrder products={item} />
            </div>
          ))
        ) : (
          <p>Товар не найден</p>
        )}
      </div>
    </main>
  );
}
