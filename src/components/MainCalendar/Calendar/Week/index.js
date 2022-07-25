import React from "react";
import { format } from "date-fns";

import styles from "./Week.module.scss";

const Week = (props) => {
  const { weekArray, today } = props;
  return (
    <>
      {weekArray.map((day) => {
        if (
          day === format(today, "dd") &&
          format(today, "MMMM") === format(new Date(), "MMMM") &&
          format(today, "y") === format(new Date(), "y")
        ) {
          return <p className={styles.numbersDateWithBorder}>{day}</p>;
        }
        return <p className={styles.numbersDate}>{day}</p>;
      })}
    </>
  );
};

export default Week;
