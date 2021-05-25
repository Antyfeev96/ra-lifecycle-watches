import './Watch.scss';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Watch extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.shape({
      city: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <div className="watch">
        <div className="watch__city">{this.props.city}</div>
        <div className="watch__delete"></div>
        <div className="watch__time">{this.props.timestamp}</div>
      </div>
    )
  }
}
