import { NavLink, Route, Routes } from "react-router-dom";
import TransferAcrossUkraine from "../../components/TransferAcrossUkraine";
import styles from "./BecomeSponsor.module.sass";
import BasePage from "../BasePage";
import logoSm from "./logo-sm.svg";
import TransferFromAbroad from "../../components/TransferFromAbroad";
import TransferPayPal from "../../components/TransferPayPal";
import TransferCryptocurrency from "../../components/TransferCryptocurrency";

const linkStyle = ({ isActive }) => (isActive ? styles.activeNavLink : {});

function BecomeSponsor() {
  return (
    <section className={styles.sectionBecomeSponsor}>
      <span className={styles.titleContainer}>
        <NavLink to="/">
          <img
            className={styles.titleContainerImg}
            src={logoSm}
            alt="logo-sm"
          />
        </NavLink>{" "}
        <span>
          {" "}
          <i className="fa-solid fa-caret-right"></i> Стань спонсором фонду
        </span>
      </span>
      <h1 className={styles.fundTitle}>Стань спонсором і другом фонду</h1>
      <p className={styles.mainDescription}>
        Якщо ти не хочеш донатити безпосередньо на війну - стань другом нашої
        команди та підтримай діяльність фонду! Кошти на адміністративні витрати
        збираємо на окремий рахунок. Наші працівники - теж живі люди, які
        отримують заробітну плату. Також у фонду є повсякденні потреби.
        Наприклад, канцелярія та заправка принтерів. Тому саме твоя підтримка
        дасть змогу нам працювати більше і якісніше! Якщо хочеш стати партнером
        - переходь за посиланням переходь за посиланням.
      </p>
      <nav className={styles.sponsorNav}>
        <NavLink className={linkStyle} to="transfer-across-ukraine">
          Переказ по Україні
        </NavLink>
        <NavLink className={linkStyle} to="transfer-from-abroad">
          Переказ з-за кордону
        </NavLink>
        <NavLink className={linkStyle} to="transfer-PayPal">
          Через PayPal
        </NavLink>
        <NavLink className={linkStyle} to="transfer-cryptocurrency">
          Криптовалюта
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={BasePage} />
        <Route
          path="transfer-across-ukraine"
          element={<TransferAcrossUkraine />}
        />
        <Route path="transfer-from-abroad" element={<TransferFromAbroad />} />
        <Route path="transfer-PayPal" element={<TransferPayPal />} />
        <Route
          path="transfer-cryptocurrency"
          element={<TransferCryptocurrency />}
        />
      </Routes>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        dignissimos nihil sed magnam? Maxime neque inventore quasi? Eaque
        incidunt dolores distinctio. Modi repellendus, sint velit enim accusamus
        quasi distinctio quidem!
      </p> */}
    </section>
  );
}

export default BecomeSponsor;
