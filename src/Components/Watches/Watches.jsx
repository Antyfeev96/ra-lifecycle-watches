import './Watches.scss';
import { Component } from 'react'
import PropTypes from 'prop-types'
import Watch from '../Watch/Watch';

export default class Watches extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    state: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      })
    )
  }

  render() {
    return (
      <div className="watches">
        {this.props.state.map((watch, index) => <Watch key={watch.key} {...watch} deleteWatch={() => this.props.deleteWatch(index)} />)}
      </div>
    )
  }
}
