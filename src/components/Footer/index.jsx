import { NavLink } from "react-router-dom";
import styles from "./Footer.module.sass";

function Fotter() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.divAllInformation}>
        <p>Благодійна організація «БЛАГОДІЙНИЙ ФОНД «ЗАХИСТ МАЙБУТНЬОГО»</p>
        <p className={styles.footerParagraph}>Загальна інформація</p>
        <a href="mailto:info@maibutnie.org">info@maibutnie.org</a>
        <a href="tel:+380687298888">+38 068 729 88 88</a>
        <p className={styles.footerParagraph}>Співпраця</p>
        <a href="mailto:partner@maibutnie.org">partner@maibutnie.org</a>
        <p className={styles.footerParagraph}>ЗМІ</p>
        <a href="mailto:press@maibutnie.org">press@maibutnie.org</a>
        <p className={styles.footerParagraph}>Адреса</p>
        <p>01010, Київ, вул. Івана Мазепи 3Б</p>
      </div>
      <div className={styles.navLinkWrapper}>
        <NavLink to="/projects">ПРОЄКТИ</NavLink>
        <NavLink to="/about-the-fund">ПРО ФОНД</NavLink>
        <NavLink to="/fund-news">НОВИНИ ФОНДУ</NavLink>
        <NavLink to="/reports">ЗВІТИ</NavLink>
        <NavLink to="become-sponsor">СТАТИ ДРУГОМ ФОНДУ</NavLink>
        <NavLink to="/to-support" className={styles.supportLink}>
          ПІДТРИМАТИ <i className="fa-solid fa-dragon"></i>
        </NavLink>
      </div>
      <div className={styles.wrapperSocNetwork}>
        <a href="https://www.facebook.com/maibutniefund">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/zakhyst_maibutnoho/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Fotter;
