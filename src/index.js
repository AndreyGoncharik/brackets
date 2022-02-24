
//let str = `((()))()`.split('');
//str.splice(0, 2);
//console.log(str);

//let bracketsConfig = `[ [ '(', ')' ] ]`;

//let b = bracketsConfig.replace(/[\s,']/g, m => (m == ',' || m == "'") ? m = '' : '');


module.exports = function check(str, bracketsConfig) {
let n = true;
  while (n) {
    n = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let ind = str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]);
      if (ind >= 0) {
        str = str.slice(0, ind) + str.slice(ind + 2);
        n = true;
      }
    }
  }
  if (str.length === 0) {
    return true;
  }
  return false;
};
