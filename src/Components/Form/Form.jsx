import "./Form.scss";
import { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      timestamp: ''
    }
  }

  onInputHandler(event) {
    const { name, value } = event.target;
    this.setState((state) => ({...state, [name]: value}));
  }

  render() {
    return (
      <form className="form" name="form">
        <div className="form__city-name">
          <div>Название</div>
          <input type="text" name="city" id="city" onChange={this.onInputHandler.bind(this)} />
        </div>
        <div className="form__timestamp">
          <div>Временная зона</div>
          <input type="text" name="timestamp" id="timestamp" onChange={this.onInputHandler.bind(this)} />
        </div>
        <div className="form__submit">
          <input type="submit" value="Добавить" />
        </div>
      </form>
    )
  }
}
