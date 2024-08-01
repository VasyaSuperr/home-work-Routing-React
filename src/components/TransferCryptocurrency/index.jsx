import React from "react";
import styles from "./../../common/style/SameTransferStyles.module.sass";

const data = [
  { label: "USDT(TRC20)", value: "TUbmxCTxNVnaRrCy6Ya3Qfm1dGxtnCJ4a3" },
  { label: "BTC", value: "1FBNuUiFKTJCnKX7HK9Hoqsv72kjEbpdhY" },
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

function TransferCryptocurrency() {
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

export default TransferCryptocurrency;
