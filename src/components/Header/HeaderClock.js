import React from "react";
import moment from "moment";
class HeaderClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <p>{moment(this.state.data).format("DD/MM/YYYY, hh:mm a")}</p>
      </>
    );
  }
}
export default HeaderClock;
