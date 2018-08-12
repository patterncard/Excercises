function dateUpdater() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const sec = newDate.getSeconds();
  return [hour, min, sec];
}

function arrowsMover(hour, min, sec) {
  let hrPosition = (hour * 360 / 12) + (min * 360 / 60 / 12);
  let minPosition = (min * 360 / 60) + (sec * 360 / 60 / 60);
  let secPosition = sec * 360 / 60;  

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

function updateTime() {
  const hour = dateUpdater()[0];
  const min = dateUpdater()[1];
  const sec = dateUpdater()[2];
  arrowsMover(hour, min, sec);
}

setInterval(updateTime, 1000);
