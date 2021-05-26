import "./Watch.scss";
import moment from "moment";
import { Component } from "react";
import PropTypes from "prop-types";
import Clock from "../Clock/Clock";

export default class Watch extends Component {
  constructor(props) {
    super(props);
    console.log(moment().utc().add(this.diff, "hours")._d);
    this.diff = +this.props.timestamp;
    this.state = {
      date: moment().utc().add(this.diff, "hours")._d,
      // .format("HH:mm:ss")
    };
    this.deleteWatch = this.props.deleteWatch;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: moment().utc().add(this.diff, "hours")._d,
      // .format('HH:mm:ss')
    });
  }

  static propTypes = {
    data: PropTypes.shape({
      city: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
  };

  render() {
    return (
      <div className='watch'>
        <span className='watch__city'>{this.props.city}</span>
        <span className='watch__delete' onClick={this.deleteWatch}>
          ✘
        </span>
        <Clock date={this.state.date} />
      </div>
    );
  }
}
