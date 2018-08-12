const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function time() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return [hour, min, sec];
}

function tipsOfClock(hour, min, sec) {
  let hrPosition = (hour * 360 / 12) + (min * 360 / 60 / 12);
  let minPosition = (min * 360 / 60) + (sec * 360 / 60 / 60);
  let secPosition = sec * 360 / 60;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

function clock() {
  const hour = time()[0];
  const min = time()[1];
  const sec = time()[2];
  tipsOfClock(hour, min, sec);
}

setInterval(clock , 1000);




