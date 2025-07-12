// for(let i=1;i<=15;i++){
// if(i%2!=0){
//     console.log(i);
// }
// }
// let n=prompt("Enter you nth.");
// for(let i=1;i<=n;i++){
// if(i%2==0){
//     console.log(i);
// }
// }

//Multiplication table of 5.

// for(i=1;i<=50;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// let fMovie="avatar";
// let guessMovie=prompt("Guess My Favourite Movie!");
// while((guessMovie!=fMovie) && (guessMovie!="quit")){
//     guessMovie=prompt("Wrong!!!!!!!!!\nTry Again.");
// }
// if(guessMovie=="quit"){
//  console.log("Oh No! You lost the game.");
// }
// else{
// console.log(`You guessed is right.Its ${fMovie}`);
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let number=287152;
// let count=0;
// let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// let number=287152;
// let copy=number;
// let sum=0;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// let n=prompt("Input number to find factorial:");
// let factorial=1;
// for(let i=1;i<=n;i++){
// factorial*=i;
// }
// console.log(factorial);

let arr=[1,2,3,4,5,6,9,8,5,15,12,500,501,0,33,77,88];
let largest=0;
for(let i=1;i<=arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest);