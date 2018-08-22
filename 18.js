function is50(dogs, cats) {
  return (((dogs === 50 || cats === 50) && (dogs !== cats)) || dogs + cats === 50);
}
console.log(is50(50, 30));
