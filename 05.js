const str = 'w3resource ';
const spt = str.split('');
// let lastOne = spt[spt.length];
let ndz = null;
function cut() {
  const rlk = spt.pop();
  spt.unshift(rlk);
  ndz = spt.join('');
  console.log(ndz);
}
setInterval(cut, 300);
