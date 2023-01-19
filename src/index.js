module.exports = function check(str, bracketsConfig) {
  // let out = '';
  let arr = str.split('');
  while(arr.length >= 2){
    for (let i = 0; i < bracketsConfig.length; i++){
      let f1 = arr.indexOf(bracketsConfig[i][0]);
      let f2 = arr.indexOf(bracketsConfig[i][1]);
      if (((f1 >= 0) && (f2 >= 0)) && (f2 > f1)) {
        arr.splice(arr.indexOf(bracketsConfig[i][0]), 1);
        arr.splice(arr.indexOf(bracketsConfig[i][1]), 1);
      }
      
    }
  }
  


  return arr.length == 0;
}
