import './Watch.scss';
import moment from 'moment/min/moment-with-locales';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.time = moment().utc().format('HH:mm:ss');
    this.diff = +this.props.timestamp
    console.log(this.diff);;
    this.newTime = moment().utc().add(this.diff, 'hours').format('HH:mm:ss');
  }

  static propTypes = {
    data: PropTypes.shape({
      city: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  }

  // giveLocalTime(timestamp) {

  // }

  render() {
    return (
      <div className="watch">
        <span className="watch__city">{this.props.city}</span>
        <span className="watch__delete">✘</span>
        <div className="watch__time">{this.newTime}</div>
      </div>
    )
  }
}
