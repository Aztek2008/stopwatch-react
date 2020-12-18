export default function TimeString(timerTime) {
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return `${hours} : ${minutes} : ${seconds}`;
}
