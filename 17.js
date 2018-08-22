function compareTo19(balls) {
  const play = 19 - balls;
  if (balls > 19) {
    return 3 * Math.abs(play);
  }
  return play;
}
console.log(compareTo19(20));
