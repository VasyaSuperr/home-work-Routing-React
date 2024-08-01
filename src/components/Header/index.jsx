import { NavLink } from "react-router-dom";
import logoImg from "./logo-main.svg";
import styles from "./Header.module.sass";

const linkStyle = ({ isActive }) => (isActive ? styles.activeNavLink : {});

function Header() {
  return (
    <header className={styles.navigationBar}>
      <h1>РАЗОМ ДО ПЕРЕМОГИ</h1>
      <nav className={styles.navigationList}>
        <NavLink to="/">
          <img src={logoImg} alt="Захист Майбутнього" />
        </NavLink>
        <NavLink className={linkStyle} to="/projects">
          ПРОЄКТИ
        </NavLink>
        <NavLink className={linkStyle} to="/about-the-fund">
          ПРО ФОНД
        </NavLink>
        <NavLink className={linkStyle} to="/fund-news">
          НОВИНИ ФОНДУ
        </NavLink>
        <NavLink className={linkStyle} to="/reports">
          ЗВІТИ
        </NavLink>
        <NavLink className={linkStyle} to="become-sponsor/*">
          СТАТИ ДРУГОМ ФОНДУ
        </NavLink>
        <NavLink to="/to-support" className={styles.supportLink}>
          ПІДТРИМАТИ <i className="fa-solid fa-dragon"></i>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
