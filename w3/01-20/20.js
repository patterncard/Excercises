function checkSign(x, y) {
  return (x > 0 && y < 0) || (x < 0 && y > 0);
}
console.log(checkSign(2, -3));
