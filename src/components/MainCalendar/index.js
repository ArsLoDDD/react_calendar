import React, { Component } from "react";
import Calendar from "./Calendar/index";
import Today from "./Today/index";
import { addYears, subYears, addMonths, subMonths } from "date-fns";
import styles from "./MainCalendar.module.scss";

class MainCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    };
  }
  changeTodayAddYear = () => {
    const { today } = this.state;
    this.setState({ today: addYears(today, 1) });
  };
  changeTodaySubYear = () => {
    const { today } = this.state;
    this.setState({ today: subYears(today, 1) });
  };
  changeTodayAddMonth = () => {
    const { today } = this.state;
    this.setState({ today: addMonths(today, 1) });
  };
  changeTodaySubMonth = () => {
    const { today } = this.state;
    this.setState({ today: subMonths(today, 1) });
  };

  render() {
    const { today } = this.state;
    return (
      <div className={styles.container}>
        <Today today={today} />
        <Calendar
          today={today}
          changeTodayAddYear={this.changeTodayAddYear}
          changeTodaySubYear={this.changeTodaySubYear}
          changeTodayAddMonth={this.changeTodayAddMonth}
          changeTodaySubMonth={this.changeTodaySubMonth}
        />
      </div>
    );
  }
}

export default MainCalendar;

// import React, { Component } from "react";
// import Calendar from "./Calendar/index";
// import Today from "./Today/index";
// import { addYears, subYears, addMonths, subMonths } from "date-fns";
// import styles from "./MainCalendar.module.scss";

// class MainCalendar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       today: new Date(),
//     };
//   }
//   todayAddMonth = () => {
//     const { today } = this.state;
//     this.setState(addMonths(today, 1));
//   };
//   todaySubMonth = () => {
//     const { today } = this.props;
//     this.setState({ today: subMonths(today, 1) });
//   };
//   todayAddYear = () => {
//     const { today } = this.state;
//     this.setState({ today: addYears(today, 1) });
//   };
//   todaySubYear = () => {
//     const { today } = this.state;
//     this.setState({ today: subYears(today, 1) });
//   };
//   render() {
//     const { today } = this.state;
//     return (
//       <div className={styles.container}>
//         <Today today={today} changeToday={this.changeToday} />
//         <Calendar
//           today={today}
//           todayAddMonth={this.todayAddMonth}
//           todaySubMonth={this.todaySubMonth}
//           todayAddYear={this.todayAddYear}
//           todaySubYear={this.todaySubYear}
//         />
//       </div>
//     );
//   }
// }

// export default MainCalendar;
