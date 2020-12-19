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

  startCounter = () => {
    this.setState({
      countOn: true,
      countTime: this.state.countTime,
      countStart: Date.now() - this.state.countTime,
    });
    this.counter = setInterval(() => {
      this.setState({ countTime: Date.now() - this.state.countStart });
    }, 1000);
  };

  stopCounter = () => {
    this.setState({ countOn: false, countTime: 0 });
    clearInterval(this.counter);
  };

  pauseCounter = () => {
    this.setState({ countOn: false });
    clearInterval(this.counter);
  };

  resetCounter = async () => {
    await this.setState({ countTime: 0, countStart: 0 });
    clearInterval(this.counter);
    this.startCounter();
  };

  render() {
    const { countTime, countOn } = this.state;
    const _timeString = timeString(countTime);

    return (
      <div className={style.StopwatchContainer}>
        <span className={style.ValueContainer}>{_timeString}</span>
        <Controls
          countOn={countOn}
          onAction={!countOn ? this.startCounter : this.stopCounter}
          onPause={this.pauseCounter}
          onReset={countOn && this.resetCounter}
        />
      </div>
    );
  }
}
