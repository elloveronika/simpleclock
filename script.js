const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hour-hand");

function setDate() {
  //document.querySelector(".hand").addEventListener("click", setInterval);
  const now = new Date();
  const seconds = now.getSeconds();
  //   console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hrs = now.getHours();
  const hrDegrees = (hrs / 60) * 360 + 90;
  hrHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(setDate, 1000);
