// 小数点后两位天花板方法
function pointCeil(qian){
  qian100 = qian*100
  qianLittleCeil = Math.ceil(qian100)
  qianLittleCeil = qianLittleCeil/100
  return qianLittleCeil
}

// 小数点后两位地板方法
function pointFloor(qian){
  qian100 = qian*100
  qianLittleFloor = Math.floor(qian100)
  qianLittleFloor = qianLittleFloor/100
  return qianLittleCeil
}
