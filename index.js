
var myArray = [-1,-2,-3,5,6,1];
var positiveArr = [];
 myArray.forEach(function(item){
   if(item <= 0)
   return item
   else{
     return positiveArr.push(item)
   }

 });

console.log(positiveArr)



 