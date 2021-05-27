import "./Watch.scss";
import moment from 'moment';
import { Component } from "react";
import PropTypes from "prop-types";
import Clock from "../Clock/Clock";
moment.tz.setDefault("Europe/London");

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.diff = +this.props.timestamp * 60;
    moment().utcOffset(this.diff);
    this.state = {
      date: moment().utcOffset(this.diff),
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
      date: moment().utcOffset(this.diff),
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
