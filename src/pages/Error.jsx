import { useTranslation } from "react-i18next";

//styles
import "src/assets/styles/pages/Error.scss";
import book from "src/assets/images/book.png";

export default function Error() {
  const [t] = useTranslation();
  return (
    <div className="main">
      <img src={book} alt="none image" />
      <span>[ {t("message")} ]</span>
    </div>
  );
}
