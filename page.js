let array = [1,"h",8,"k",9,"t"];
let removeLetters = []

array.forEach(function(item) {
  if (item <= "") 
  return item

  else{
  return removeLetters.push(item)
}
});
console.log(removeLetters);