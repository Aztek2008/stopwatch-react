/**
 * Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»
Таймер должен иметь следующие кнопки:
* «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение таймера.
* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) таймер должен прекратить отсчет времени; если после него нажать старт, то возобновляется отсчет.
* «Reset» - сброс таймера на 0.  Обнуляет таймер и снова начинает отсчет.
Требования:
 - используйте Observables в коде
- RxJS подход
 - функциональный подход
 - нам важнее всего увидеть Ваше умение писать код
- 300млс – это не DoubleClick
*/

import React from "react";
import { BehaviorSubject } from "rxjs";

import Layout from "../Layout";
import Stopwatch from "../Stopwatch";

import withObservableStream from "../hoc/withObservableStream";

const App = ({ query = "", onChangeQuery }) => (
  <div>
    <Layout>
      <Stopwatch />
    </Layout>
  </div>
);

const query$ = new BehaviorSubject({ query: "react" });

export default withObservableStream(query$, {
  onChangeQuery: (value) => query$.next({ query: value }),
})(App);
