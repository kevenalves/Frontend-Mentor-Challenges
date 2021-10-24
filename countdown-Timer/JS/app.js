const COUNTDOWNDATE = new Date(`5 17, 2022 18:00:00`).getTime();

let updateInterval = setInterval(function() {

  let currentTime = new Date().getTime();

  let distanceDate = COUNTDOWNDATE - currentTime;

  let days = Math.floor(distanceDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distanceDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distanceDate % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);