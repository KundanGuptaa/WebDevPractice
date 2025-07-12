// function sumTOn(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return sum;
// }

// function concat(arr) {
//     let concat="";
//     for(i=0;i<arr.length;i++){
//         concat+=arr[i];
//     }  
//     return concat; 
// }

// arr=["kundan","gupta","sobh","@","gmail",".","com"];

// console.log(concat(arr));
//Write a JavaScript function that returns array elements larger than a number.
let arr=[777,1,4,7,4,9,11,22,44,77,99,15,18,10,111,456,325,654];
let num=111;

function findLarge(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
findLarge(arr,num);

// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str="abcdabcdefgggh";
function uniqueChar(str){
    let ans="";
    for(i=0;i<str.length;i++){
        let currentStr=str[i];
        if(ans.indexOf(currentStr)==-1){
            ans+=currentStr;
        }
    }
    return ans;
}
// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

function longestName() {
    let countryName = ["Australia", "Germany", "United States of America"];
    let ansIdx = 0;
    for (i = 0; i < countryName.length; i++) {
        let ansLen = countryName[ansIdx].length;
        let currLen = countryName[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return countryName[ansIdx];

}

// Write a JavaScript function to count the number of vowels in a String
// argument.

let str = "kundangupta";

function countVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}

// Write a JavaScript function to generate a random number within a range
// (start, end)

function rangeRandom(start,end){
    let diff=end-start;
    return randomNum=Math.floor(Math.random()*diff)+start;
}