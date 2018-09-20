function is50(dogs, cats) {
  const isOneParamEq50 = ((dogs === 50 || cats === 50) && dogs !== cats);
  const isSumEq50 = dogs + cats === 50;
  return isOneParamEq50 || isSumEq50;
}
console.log(is50(50, 30));
