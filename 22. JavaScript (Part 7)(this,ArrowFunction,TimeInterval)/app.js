//Write a function that returns the square of a number 'n'.
// const square=n=>n*n;

//Write a function that print "Hello World" 5 times at interval of 2s each

// let id = setInterval(() => {
//     console.log("Hello World.");
// }, 2000);
// console.log("Hello World");

// setTimeout(() => {
//     clearInterval(id)
// }, 10000);

//Write an arrow function named arrayAverage that accepts an array of numbers
//and return the average of those numbers.
// let arr=[3,6,2,8,4,1,9];

// const arrayAverage=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }    
//     return sum/arr.length;
// }

//write an arrow function nammed isEven() that takes single numbers as argument and return if it is even or not.

const isEven=(num)=>{
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}