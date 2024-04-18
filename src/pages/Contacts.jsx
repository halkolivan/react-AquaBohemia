import { useTranslation } from "react-i18next";

import GoogleMap from "../components/pages/GoogleMap";

//styles
import "src/assets/styles/pages/Contacts.scss";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="contacts-info">
        <ul className="adress">
          <li>
            <span>{t("country")}:</span>
            <span>{t("countryTr")}</span>
          </li>
          <li>
            <span>{t("city")}:</span>
            <span>{t("cityTr")}</span>
          </li>
          <li>
            <span>{t("street")}:</span>
            <span>{t("streetTr")}</span>
          </li>
          <li>
            <span>{t("house")}:</span>
            <span>120 А</span>
          </li>
          <li>
            <span>{t("index")}:</span>
            <span>2055</span>
          </li>
          <li>
            <span>{t("phon")}:</span>
            <span>0-22-250788</span>
          </li>
          <li>
            <span>{t("fax")}:</span>
            <span>0-22-250789</span>
          </li>
          <li>
            <span>{t("mail")}:</span>
            <span>aquabohemia@gmail.com</span>
          </li>
          <li>
            <span>{t("work")}:</span>
            <span>{t("workTr")}</span>
          </li>
        </ul>
        <div className="map">
          <GoogleMap apiKey="AIzaSyBQbh4HGmpbVJ62Qyrlrit0Wt0GTrKWmt0" />
        </div>
      </div>
    </div>
  );
}
