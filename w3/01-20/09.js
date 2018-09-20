function calcDaysUntill2018Christmas() {
  const today = new Date();
  const christmas = new Date(2018, 11, 24);
  const msec = christmas - today;
  const days = msec / 1000 / 60 / 60 / 24;
  return days;
}
console.log(calc2018Christmas());
