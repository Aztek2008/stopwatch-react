import React from "react";
import style from "./Controls.module.css";

const Controls = ({ countOn, onAction, onPause, onReset }) => (
  <div className={style.ButtonContainer}>
    {/* «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение таймера. */}
    <button className={style.Buttons} type="button" onClick={onAction}>
      {countOn ? "Stop" : "Start"}
    </button>

    {/* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) таймер должен прекратить отсчет времени; 
 если после него нажать старт, то возобновляется отсчет. */}
    <button
      id="waitButton"
      className={style.Buttons}
      type="button"
      onClick={onPause}
    >
      Wait
    </button>

    {/* «Reset» - сброс таймера на 0.  Обнуляет таймер и снова начинает отсчет. */}
    <button className={style.Buttons} type="button" onClick={onReset}>
      Reset
    </button>
  </div>
);

export default Controls;
