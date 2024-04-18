//Import components
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function NewsProducts({ newsContents }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="news-content-list">
        <img
          src={newsContents.mainImage}
          width="848"
          height="445"
          alt="none image"
        />
        <div className="data">
          <div className="data-text">
            {/* Разделил дату для удобной стилизации */}
            <span>{newsContents[i18n.language].dataDay}</span>
            <span>{newsContents[i18n.language].dataMonth}</span>
            <span>{newsContents[i18n.language].dataYear}</span>
          </div>
          <div>
            <span>{newsContents[i18n.language].descriptionNews}</span>
            <div className="statistic">
              <span>
                By
                <b> {newsContents.newsBy}</b>
              </span>
              <span>
                {t("Category")}: {t("blog")}
              </span>
              <span>{t("view")}: 273</span>
            </div>
          </div>
        </div>
        <img
          className="gaus"
          src={newsContents.backgroundImage}
          width="848"
          height="375"
          alt=""
        />
      </div>
    </div>
  );
}
