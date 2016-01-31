// 小数点后两位天花板方法
function pointCeil(qian){
  var qian100 = qian*100;
  var qianLittleCeil = Math.ceil(qian100);
  var qianLittleCeil = qianLittleCeil/100;
  return qianLittleCeil
}

// 小数点后两位地板方法
function pointFloor(qian){
  var qian100 = qian*100;
  var qianLittleFloor = Math.floor(qian100);
  var qianLittleFloor = qianLittleFloor/100;
  return qianLittleFloor
}


// 计算美元区售价
function calc() {
var daoGot = rmbGot/excRate;
var taxCamp = daoGot * 0.1;
var taxValve = daoGot * 0.05;
if (taxCamp > 0.01) {
  taxCamp = pointFloor(taxCamp);
}
else {
  taxCamp = 0.01;
}
if (taxValve > 0.01) {
  taxValve = pointFloor(taxValve);
}
else {
  taxValve = 0.01;
}
var daoSell = daoGot + taxCamp + taxValve;
return daoSell
}

function calcLoop() {
var rmbGotLast = document.getElementById(rmbGot).value;
var rmbGot = rmbGotLast.value
var excRateLast = document.getElementById(excRate).value;
var excRate = excRateLast.value
console.log(rmbGot);
console.log(excRate);
  calc();
  var initDao = daoSell;
  while (initDao == daoSell) {
    rmbGot = rmbGot + 0.01;
    calc()
  }
  document.getElementById(maxRmb).value = rmbGot
}
