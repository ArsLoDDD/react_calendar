import React from "react";
import { format } from "date-fns";
import styles from "./Today.module.scss";
const Today = () => {
  const today = new Date();
  return (
    <div className={styles.calendarConainer}>
      <p className={styles.nameOfToday}>{format(today, "EEEE")}</p>
      <p className={styles.today}>{format(today, "dd")}</p>
    </div>
  );
};

export default Today;
