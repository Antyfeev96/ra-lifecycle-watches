import "./Watch.scss";
import moment from "moment-timezone";
import { Component } from "react";
import PropTypes from "prop-types";
import Clock from "../Clock/Clock";
moment.tz.setDefault("Europe/London");

export default class Watch extends Component {
  constructor(props) {
    super(props);
    console.log(moment().format('HH:mm:ss'));
    console.log(new Date().getTimezoneOffset());
    this.diff = -(+this.props.timestamp * 60);
    this.state = {
      date: moment().utcOffset(this.diff, false),
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
      date: moment().utcOffset(this.diff * 60, false)._d,
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
