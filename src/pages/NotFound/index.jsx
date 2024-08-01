import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.sass";

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.codeError}>404</p>
      <p className={styles.descriptionError}>
        Нам дуже шкода. Схоже, ви намагаєтесь отримати доступ до сторінки, яка
        була видалена або ніколи не існувала.
      </p>
      <NavLink className={styles.returnMain} to="/">
        ПОВЕРНУТИСЯ НА ГОЛОВНУ
      </NavLink>
    </div>
  );
}

export default NotFound;
