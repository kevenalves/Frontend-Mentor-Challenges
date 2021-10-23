// Set the date we're counting down to
const COUNTDOWNDATE = new Date(`5 17, 2022 18:00:00`).getTime();

// Update the count down every 1 second
let updateInterval = setInterval(function() {

  // Get today's date and time
  let currentTime = new Date().getTime();

  // Find the distance between now and the count down date
  let distanceDate = COUNTDOWNDATE - currentTime;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distanceDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distanceDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distanceDate % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  // if (distanceDate < 0) {
  //   clearInterval(updateInterval);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);