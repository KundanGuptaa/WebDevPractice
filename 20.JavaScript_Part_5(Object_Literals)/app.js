// for (let i = 1; i <= 100; i++) {
//     console.log(Math.ceil(Math.random() * 10));
// }
let max = prompt("Enter Your Maximum Range.");
let userNum = prompt(`Guess the number b/w 1 to ${max} OR Enter quit to quit the game.`);
let randomNum = Math.floor(Math.random() * max) + 1;
while (true) {
    if (userNum == "quit") {
        console.log(`Oh No!\nYou Quited the game.The Number is ${randomNum}`)
        break;
    }
    if (userNum == randomNum) {
        console.log(`You guessed it right.It's ${randomNum}`)
        break;
    }
    else{
        userNum=prompt(`You Guessed it Worong.\nTry Again.`);
    }
}