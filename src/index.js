module.exports = function longestConsecutiveLength(array) {
  var hash = {};
  for(el of array){
    hash[el] = el;
  }
  var result = 0;
  for(el of array){
    if(hash[el + 1] !== undefined) continue;
    let counter = 0;
    while(hash[el] !== undefined){
      counter++;
      el--;      
    }
    result = counter>result?counter:result;
  }
  return result;
}
