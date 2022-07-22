import React, { Component } from "react";
import {
  startOfMonth,
  lastDayOfMonth,
  eachDayOfInterval,
  format,
  getMonth,
  getYear,
  isMonday,
  isFriday,
  isSunday,
  isTuesday,
  isWednesday,
  isThursday,
  isSaturday,
  addYears,
  subYears,
  addMonths,
  subMonths,
} from "date-fns";
import styles from "./Calendar.module.scss";
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    };
    this.weekDaysArray = {
      firstWeek: [],
      secondWeek: [],
      thirdWeek: [],
      fourthWeek: [],
      fivethWeek: [],
      sixthWeek: [],
    };
  }

  getMonthDayArray(
    firstWeek,
    secondWeek,
    thirdWeek,
    fourthWeek,
    fivethWeek,
    sixthWeek
  ) {
    const { today } = this.state;
    const array = [];
    eachDayOfInterval({
      start: new Date(
        getYear(today),
        getMonth(today),
        format(startOfMonth(today), "dd")
      ),
      end: new Date(
        getYear(today),
        getMonth(today),
        format(lastDayOfMonth(today), "dd")
      ),
    }).map((day) => {
      return array.push(format(day, "dd"));
    });

    if (isSunday(startOfMonth(today)) === true) {
      for (let i = 0; i < 7; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 7; i < 14; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 14; i < 21; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 21; i < 28; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") > "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 1; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 29; i < 30; i++) {
            const element = array[i];
            sixthWeek.push(element);
          }
          for (let i = 0; i < 6; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 29; i < 31; i++) {
            const element = array[i];
            sixthWeek.push(element);
          }
          for (let i = 0; i < 5; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isMonday(startOfMonth(today)) === true) {
      for (let i = 0; i < 6; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 1; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 6; i < 13; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 13; i < 20; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 20; i < 27; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 27; i < 28; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 6; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 27; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 5; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 27; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 4; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 27; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 3; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isTuesday(startOfMonth(today)) === true) {
      for (let i = 0; i < 5; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 2; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 5; i < 12; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 12; i < 19; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 19; i < 26; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 26; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 5; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 4; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 3; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 2; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isWednesday(startOfMonth(today)) === true) {
      for (let i = 0; i < 4; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 3; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 4; i < 11; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 11; i < 18; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 18; i < 25; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 25; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 4; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 3; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 2; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 1; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isThursday(startOfMonth(today)) === true) {
      for (let i = 0; i < 3; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 4; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 3; i < 10; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 10; i < 17; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 17; i < 24; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 24; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 3; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 2; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 1; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isFriday(startOfMonth(today)) === true) {
      for (let i = 0; i < 2; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 5; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 2; i < 9; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 9; i < 16; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 16; i < 23; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 23; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 2; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 1; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 6; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 30; i < 31; i++) {
            const element = array[i];
            sixthWeek.push(element);
          }
          for (let i = 0; i < 6; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
    if (isSaturday(startOfMonth(today)) === true) {
      for (let i = 0; i < 1; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 6; i++) {
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 1; i < 8; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 8; i < 15; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 15; i < 22; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 22; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if (format(lastDayOfMonth(today), "dd") >= "28") {
        if (format(lastDayOfMonth(today), "dd") === "28") {
          for (let i = 0; i < 1; i++) {
            fivethWeek.push(<span className={styles.notVisible}>10</span>);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "29") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 0; i < 7; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "30") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 29; i < 30; i++) {
            const element = array[i];
            sixthWeek.push(element);
          }
          for (let i = 0; i < 6; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
        if (format(lastDayOfMonth(today), "dd") === "31") {
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
          for (let i = 29; i < 31; i++) {
            const element = array[i];
            sixthWeek.push(element);
          }
          for (let i = 0; i < 5; i++) {
            sixthWeek.push(<span className={styles.notVisible}>10</span>);
          }
        }
      }
    }
  }
  handlerAddMonth = () => {
    const { today } = this.state;
    this.setState({ today: addMonths(today, 1) });
  };
  handlerSubMonth = () => {
    const { today } = this.state;
    this.setState({ today: subMonths(today, 1) });
  };
  handlerAddYear = () => {
    const { today } = this.state;
    this.setState({ today: addYears(today, 1) });
  };
  handlerSubYear = () => {
    const { today } = this.state;
    this.setState({ today: subYears(today, 1) });
  };
  // renderDays = (day) => {
  //   const { today } = this.state;
  //   if (
  //     day === format(today, "dd") &&
  //     format(today, "MMMM") === format(new Date(), "MMMM")
  //   ) {
  //     return <p className={styles.numbersDateWithBorder}>{day}</p>;
  //   }
  //   return <p className={styles.numbersDate}>{day}</p>;
  // };
  render() {
    const { today } = this.state;
    const firstWeek = [];
    const secondWeek = [];
    const thirdWeek = [];
    const fourthWeek = [];
    const fivethWeek = [];
    const sixthWeek = [];
    this.getMonthDayArray(
      firstWeek,
      secondWeek,
      thirdWeek,
      fourthWeek,
      fivethWeek,
      sixthWeek
    );
    const daysWeek = ["S", "M", "T", "W", "T", "F", "s"];
    console.log(firstWeek);
    return (
      <div className={styles.calendarConainer}>
        <div className={styles.flexSection}>
          <p className={styles.monthStyle}>{format(today, "MMMM")}</p>
          <p className={styles.yearStyle}>{format(today, "Y")}</p>
        </div>
        <div className={styles.flexBtn}>
          <div className={styles.innerFlexBtn}>
            <p onClick={this.handlerSubMonth}>{`<`}</p>
            <p onClick={this.handlerAddMonth}>{`>`}</p>
          </div>
          <div className={styles.innerFlexBtnSecond}>
            <p onClick={this.handlerSubYear}>{`<`}</p>
            <p onClick={this.handlerAddYear}>{`>`}</p>
          </div>
        </div>
        <div className={styles.dayWeekName}>
          {daysWeek.map((day) => {
            return <div>{day}</div>;
          })}
        </div>
        <div className={styles.flexContainer}>
          {firstWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
          {secondWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
          {thirdWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
          {fourthWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
          {fivethWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
          {sixthWeek.map((day) => {
            if (
              day === format(today, "dd") &&
              format(today, "MMMM") === format(new Date(), "MMMM") &&
              format(today, "y") === format(new Date(), "y")
            ) {
              return <p className={styles.numbersDateWithBorder}>{day}</p>;
            }
            return <p className={styles.numbersDate}>{day}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;
