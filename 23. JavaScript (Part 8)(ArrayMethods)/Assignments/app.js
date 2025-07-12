// Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr=[12,3,6,9,4,5,7,10,11];
// let square=arr.map((num)=>num*num);
// console.log(square);

// let sum=arr.reduce((sum,el)=>(sum+el));
// let average=sum/arr.length;
// console.log(average);

// Create a new array using the map function whose each element is equal to the
// original element plus 5

// let arr=[12,3,6,9,4,5,7,10,11];
// let newArr=arr.map((num)=>num+5);
// console.log(newArr);

// Create a new array whose elements are in uppercase of words present in the
// original array

// let string=["kundan","gupta","sobh"];
// let newString=string.map((str)=>str.toUpperCase());
// console.log(newString);

// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,...args.map((v)=>v*2)
// ]

// Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

const mergeObjects=(objct1,objct2)=>({...objct1,...objct2});