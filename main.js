console.log('Hi')

console.log('items');
//Question 1:
//Show me how to calculate the average price of all items.
//  The average price is $23.63

//pull out the price of each object and put into a new array;
//divide the sum of the objects in the array by the length of the array

var priceArr = items.map(function(item, i, arr){
  return item.price;
})
console.log(priceArr);

var sum = priceArr.reduce(function(acc, val){
  return acc + val;
})
console.log(sum)

function ans1(sum, total){
  return sum / total.length
}
console.log(ans1(sum, priceArr));

var ans = document.querySelector('#ans1')
ans.innerHTML =  'The average price is '+ ans1(sum, priceArr) +'.';
