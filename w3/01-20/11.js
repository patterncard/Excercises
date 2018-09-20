function celsiusToFahreinheit(c) {
  const fahreinheits = (9 / 5) * c + 32;
  return fahreinheits;
}
const o = 60;
const temp1 = celsiusToFahreinheit(o);
console.log(`${o} is ${temp1} Fahreinheits`);


function fahreinheitToCelsius(f) {
  const celsius = (5 / 9) * (f - 32);
  return celsius;
}
const p = 45;
const temp2 = fahreinheitToCelsius(p);
console.log(`${p} is ${temp2.toFixed(1)} Celsius`);
