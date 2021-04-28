var myArr = [9,-9,0,5,-7,-6,8,5,2,-4];
var returnPositive = [];
myArr.forEach(function(item){
if (item <= 0)
return returnPositive;
else {
  return returnPositive.push(item);
};
});
console.log(returnPositive)

