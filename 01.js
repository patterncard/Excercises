const hn = new Date();
// const weekDays = {
//   0: 'Sunday',
//   1: 'Monday',
//   2: 'Tuesday',
// };

const d = new Array(7);
d[0] = 'Sunday';
d[1] = 'Monday';
d[2] = 'Tuesday';
d[3] = 'Wedensday';
d[4] = 'Thursday';
d[5] = 'Friday';
d[6] = 'Saturday';

// const dayToGet = hn.getDay();
// const xcv = weekDays[dayToGet];

const gff = d[hn.getDay()];
const bala = hn.getHours();
const ko = hn.getMinutes();

// function jk2(a) {
//   return a.length === 1 ? `0${a}` : a;
// }

const kojk = jk(ko);
// console.log(`Today is: ${gff} Current time is; ${bala}`);
console.log(`Today is: ${gff}, Current time is: ${bala}:${kojk}`);


function jk(a) {
  if (a.length === 1) {
    const kdk = `0${a}`;
    return kdk;
  } else {
    return a;
  }
}
