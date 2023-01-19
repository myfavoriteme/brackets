module.exports = function check(str, bracketsConfig) {
  
  let arr = str.split('');

  for(let k = 0; k < arr.length; k++){
    for (let i = 0; i < bracketsConfig.length; i++){

      if(arr[k] === bracketsConfig[i][0] && arr[k + 1] === bracketsConfig[i][1]) {
        arr.splice(k, 2);
        k = k - 2;
      }
    }
  }

  return arr.length == 0;
}
