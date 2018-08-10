for (let year = 2014; year <= 2050; year += 1) {
  const date = new Date(year, 0, 1);
  // console.log(date.getDay())
  if (date.getDay() === 0) {
    console.log("1st January is beginning Sunday ", year);
  }
}
