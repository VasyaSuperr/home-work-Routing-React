import React from "react";
import styles from "./../../common/style/SameTransferStyles.module.sass";

const data = [
  { label: "Розрахунковий рахунок", value: "UA663052990000026005006241281" },
  { label: "Отримувач", value: "БФ ЗАХИСТ МАЙБУТНЬОГО БО" },
  { label: "ЄДРПОУ", value: "44865632" },
  { label: "Призначення платежу", value: "Благодійна допомога" },
];

function handleCellClick(content) {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("Текст скопійовано в буфер обміну!");
    })
    .catch((err) => {
      console.error("Не вдалося скопіювати текст: ", err);
    });
}

function TransferAcrossUkraine() {
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

export default TransferAcrossUkraine;
