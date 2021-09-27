let time = document.querySelector("#time");
let day = document.querySelector("#day");

let clock = setInterval(function calcTime() {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();
  let today = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  time.textContent = `${hr} : ${min} : ${sec}`;
  day.textContent = today[date_now.getDay()];
}, 1000);
