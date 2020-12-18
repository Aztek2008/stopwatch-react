import React, { Component } from "react";

import Controls from "../Controls";
import timeString from "../TimeString";

import style from "./Stopwatch.module.css";

export default class Stopwatch extends Component {
  state = {
    countOn: false,
    countStart: 0,
    countTime: 0,
  };

  startTimer = () => {
    this.setState({
      countOn: true,
      countTime: this.state.countTime,
      countStart: Date.now() - this.state.countTime,
    });
    this.counter = setInterval(() => {
      this.setState({ countTime: Date.now() - this.state.countStart });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ countOn: false, countTime: 0 });
    clearInterval(this.counter);
  };
  pauseTimer = () => {
    this.setState({ countOn: false });
    clearInterval(this.counter);
  };

  render() {
    const { countTime, countOn } = this.state;
    const _timeString = timeString(countTime);

    return (
      <div className={style.StopwatchContainer}>
        <span className={style.ValueContainer}>{_timeString}</span>
        <Controls
          countOn={countOn}
          onAction={!countOn ? this.startTimer : this.stopTimer}
          onPause={this.pauseTimer}
          onReset={this.stopTimer}
        />
      </div>
    );
  }
}
