import './Watches.scss';
import { nanoid } from 'nanoid';
import { Component } from 'react'
import PropTypes from 'prop-types'
import Watch from '../Watch/Watch';

export default class Watches extends Component {
  constructor(props) {
    super(props);
    this.watches = [
      {
        city: 'Moscow',
        timestamp: '+3',
        key: nanoid(5)
      },
      {
        city: 'London',
        timestamp: '0',
        key: nanoid(5)
      }
    ]
  }
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="watches">
        {this.watches.map(watch => <Watch key={watch.key} {...watch} />)}
      </div>
    )
  }
}
