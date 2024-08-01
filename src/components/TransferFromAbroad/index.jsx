import React from "react";
import styles from "./../../common/style/SameTransferStyles.module.sass";

const data = [
  {
    label: "IBAN Code Долар США (USD)",
    value: "UA563052990000026003036239652",
  },
  { label: "IBAN Code Євро (EUR)", value: "UA843052990000026007006238173" },
  { label: "Назва підприємства", value: "CF PROTECTION OF THE FUTURE CO" },
  {
    label: "Назва банку",
    value: "JSC CB 'PRIVATBANK', 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE",
  },
  { label: "SWIFT code", value: "PBANUA2X" },
  {
    label: "Адреса підприємства",
    value: "01010, 3b, Ivana Mazepy St., Kyiv, Ukraine",
  },
  { label: "Призначення платежу", value: "Charitable donation" },
];

function handleCellClick(content) {
  navigator.clipboard
    .writeText(content)
    .then(() => alert("Текст скопійовано в буфер обміну!"))
    .catch((err) => console.err("Не вдалося скопіювати текст: ", err));
}

function TransferFromAbroad() {
  return (
    <table className={styles.infoTable}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={`${styles.label} ${styles.sameFeatures}`}>
              {item.label}
            </td>
            <td
              className={styles.sameFeatures}
              onClick={() => handleCellClick(item.value)}
            >
              {item.value} <i className="fa-solid fa-copy"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransferFromAbroad;
