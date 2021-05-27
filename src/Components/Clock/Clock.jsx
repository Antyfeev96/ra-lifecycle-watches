import PropTypes from "prop-types";
import moment from "moment-timezone";
import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    };
    this.clockRef = React.createRef();
  }

  displayCanvas(date) {
    const canvasEl = this.clockRef.current;
    canvasEl.setAttribute('width', 200);
    canvasEl.setAttribute('height', 200);
    const contextEl = this.clockRef.current.getContext("2d");
    contextEl.strokeRect(0, 0, canvasEl.width, canvasEl.height);

    //Расчет координат центра и радиуса часов
    const radiusClock = canvasEl.width / 2 - 10;
    const xCenterClock = canvasEl.width / 2;
    const yCenterClock = canvasEl.height / 2;

    //Очистка экрана.
    contextEl.fillStyle = "#ffffff";
    contextEl.fillRect(0, 0, canvasEl.width, canvasEl.height);

    //Рисуем контур часов
    contextEl.strokeStyle = "#000000";
    contextEl.lineWidth = 1;
    contextEl.beginPath();
    contextEl.arc(
      xCenterClock,
      yCenterClock,
      radiusClock,
      0,
      2 * Math.PI,
      true
    );
    contextEl.moveTo(xCenterClock, yCenterClock);
    contextEl.stroke();
    contextEl.closePath();

    const radiusNum = radiusClock - 10; //Радиус расположения рисочек
    let radiusPoint;

    for (let tm = 0; tm < 60; tm++) {
      contextEl.beginPath();
      if (tm % 5 === 0) {
        radiusPoint = 5;
      } else {
        radiusPoint = 2;
      } //для выделения часовых рисочек

      const xPointM =
        xCenterClock +
        radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
      const yPointM =
        yCenterClock -
        radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
      contextEl.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
      contextEl.stroke();
      contextEl.closePath();
    }

    //Оцифровка циферблата часов
    for (let th = 1; th <= 12; th++) {
      contextEl.beginPath();
      contextEl.font = "bold 25px sans-serif";
      const xText =
        xCenterClock +
        (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
      const yText =
        yCenterClock -
        (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);

      if (th <= 9) {
        contextEl.strokeText(th, xText - 5, yText + 10);
      } else {
        contextEl.strokeText(th, xText - 15, yText + 10);
      }
      contextEl.stroke();
      contextEl.closePath();
    }

    //Рисуем стрелки
    const lengthSeconds = radiusNum - 10;
    const lengthMinutes = radiusNum - 15;
    const lengthHour = lengthMinutes / 1.5;

    const t_sec = 6 * date.seconds(); //Определяем угол для секунд
    const t_min = 6 * (date.minutes() + (1/60) * date.seconds()); //Определяем угол для минут
    const t_hour = 30 * (date.hours() + (1/60) * date.minutes()); //Определяем угол для часов

    //Рисуем секунды
    contextEl.beginPath();
    contextEl.strokeStyle =  "#FF0000";
    contextEl.moveTo(xCenterClock, yCenterClock);
    contextEl.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec * (Math.PI/180)),
				yCenterClock - lengthSeconds * Math.sin(Math.PI/2 - t_sec * (Math.PI/180)));
    contextEl.stroke();
    contextEl.closePath();

    //Рисуем минуты
    contextEl.beginPath();
    contextEl.strokeStyle =  "#000000";
    contextEl.lineWidth = 3;
    contextEl.moveTo(xCenterClock, yCenterClock);
    contextEl.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min * (Math.PI/180)),
				 yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min * (Math.PI/180)));
    contextEl.stroke();
    contextEl.closePath();

    //Рисуем часы
    contextEl.beginPath();
    contextEl.lineWidth = 5;
    contextEl.moveTo(xCenterClock, yCenterClock);
    contextEl.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
				 yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    contextEl.stroke();
    contextEl.closePath();

    //Рисуем центр часов
    contextEl.beginPath();
    contextEl.strokeStyle =  "#000000";
    contextEl.fillStyle = "#ffffff";
    contextEl.lineWidth = 3;
    contextEl.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
    contextEl.stroke();
    contextEl.fill();
    contextEl.closePath();
  };


  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({date: this.props.date});
      this.displayCanvas(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <canvas className="watch__clock" ref={this.clockRef} id='clock'></canvas>
    )
  }
}
