import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

//import style
import "../assets/styles/pages/News.scss";

import NewsProducts from "../components/pages/NewsProducts";

export default function News() {
  const { t } = useTranslation();

  const [news, setNews] = useState(undefined);

  useEffect(() => {
    fetch("/mock/productsData.json")
      .then((response) => {
        return response.json();
      })
      .then((newsData) => {
        setNews(newsData.newsProducts);
      });
  }, []);

  // боковые новости

  const [top, setTop] = useState(undefined);

  useEffect(() => {
    fetch("/mock/productsData.json")
      .then((response) => {
        return response.json();
      })
      .then((newsData) => {
        setTop(newsData.topics);
      });
  }, []);

  return (
    <main>
      <div className="title-head">
        <span>{t("news")}</span>
        <span>
          {t("main")} / {t("news")}
        </span>
      </div>
      <div className="news-content">
        <div className="news-content-list">
          {news ? (
            news.map((item) => (
              <div key={item.id}>
                <NewsProducts newsContents={item} />
              </div>
            ))
          ) : (
            <p>Новости не найдены</p>
          )}
        </div>
        <div className="topic">
          {top ? (
            top.map((item) => (
              <div className="topic-list" key={item.id}>
                <span>{item[i18n.language].post}</span>
                <div className="datas">
                  <span>{item[i18n.language].dataDay}</span>
                  <span>{item[i18n.language].dataMonth}</span>
                  <span>{item[i18n.language].dataYear}</span>
                </div>
              </div>
            ))
          ) : (
            <p>Топ не найдены</p>
          )}
        </div>
      </div>
    </main>
  );
}
