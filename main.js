console.log('Hi')

console.log(items);
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


function avg (sum, total) {
  return sum / total.length
}

console.log(avg(sum, priceArr));

var ans = document.querySelector('#ans1')
ans.innerHTML =  'The average price is '+ avg(sum, priceArr) +'.';


//Q2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//answer
// 1970s Coors Banquet Glass Beer Pitcher

//  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

//  Hand Painted Colorful Feather Glass
console.log('QUESTION2');
//take all items with a cost >= 14 and <= 18 and put into a new array
//display their titles
//filter out items above 18 and put them into an array
//filter out items below 14 and put those in an array - that array is your answer
//for each oject in the array, check to see if the price is between 14 and 18
//put the objects with a price between 14 and 18 in a new array
//place that new array on the DOM

var midArr = items.filter(function(item, i, arr){
  if (item.price > 14){
    if (item.price < 18){
      return item.title;
    }
  }
});
console.log(midArr);

var titles = midArr.map(function(item, i, array){
  return '<div>'+item.title+'</div>'
})
console.log(titles);

var ansTwo = document.querySelector('#ans2')
ansTwo.innerHTML =  titles;
//Q3
//Which item has a "GBP" currency code? Display it's name and price.
//answer
//  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//look through the array and find the GBP by making it set to a true statement
//

var gbp = items.filter(function(item, i, arr){
  return item.currency_code === 'GBP'
})
console.log(gbp)
var britishCurr = gbp.map(function(item, i, array){
  return '<div>'+item.title+'</div>'
})
console.log(titles);

var ansThree = document.querySelector('#ans3')
ansThree.innerHTML = britishCurr;

//Q4
//Display a list of all items who are made of wood.
//answer//
//  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

//  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

//  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//
//  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

//  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

//filter by materials then filter by wood
var material = items.filter(function(item, i, arr){
  var mat =  item.material
  mat = 
})
console.log(material);
// var britishCurr = gbp.map(function(item, i, array){
//   return '<div>'+item.title+'</div>'
// })
// console.log(titles);
//
// var ansThree = document.querySelector('#ans3')
// ansThree.innerHTML = britishCurr;


//Q5
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
//answer
//  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  // wall mount bottle opener
  // wedding
  // man cave
  // christmas gift
  // guy gift
  // fathers day
  // home bar
  // beer
  // bar
  //
  // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
  //
  // glass
  // sandblast cabinet
  // vinyl
  // beer glass
  // pint glass
  // etched pint glass
  // etched glass
  // etched beer glass
  // 16 oz pint
  // beer gift
  // etched harry potter glass
  // the three broomsticks glass
  // personalized harry potter glass


//Q6
//How many items were made by their sellers?
//answer//
//  18 were made by their sellers
