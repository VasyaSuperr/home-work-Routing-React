import { NavLink } from "react-router-dom";
import picPersonKaras from "./pic-person-karas.webp";
import styles from "./Home.module.sass";

function Home() {
  return (
    <section className={styles.mainHomeWrapper}>
      <div className={styles.textWrapperInMainSection}>
        <h1 className={styles.mainTitle}>
          Благодійний фонд{" "}
          <span className={styles.insertTitle}>ЗАХИСТ МАЙБУТНЬОГО</span>
        </h1>
        <p className={styles.insertFoud}>Фонд допомоги армії.</p>
        <p>
          Інноваційні розробки техніки для ЗСУ та оперативна доставка всього
          необхідного на лінію фронту
        </p>
        <NavLink to="/to-support" className={styles.supportLink}>
          ПІДТРИМАТИ <i className="fa-solid fa-dragon"></i>
        </NavLink>
        <div className={styles.iconWrapper}>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-google-pay"></i>
          <i className="fa-brands fa-apple-pay"></i>
          <i className="fa-brands fa-swift"></i>
          <i className="fa-solid fa-piggy-bank"></i>
        </div>
      </div>
      <img className={styles.mainImg} src={picPersonKaras} alt="Photo user" />
    </section>
  );
}

export default Home;
