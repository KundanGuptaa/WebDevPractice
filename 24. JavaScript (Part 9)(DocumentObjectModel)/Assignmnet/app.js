// Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'

let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText="Click me";
document.querySelector("body").append(btn);
document.querySelector("body").append(input);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

// Access the btn using the querySelector and button id. 
// Change the button background color to blue and text color to white.

document.querySelector("button").classList.add("btnstyle");

// Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.
let h1Sec=document.createElement("h1");
h1Sec.innerHTML=("<u>DOM Practice</>");
document.querySelector("body").prepend(h1Sec);
h1Sec.classList.add("h1sec");

// Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

let ptag=document.createElement("p");
ptag.innerHTML=("Apna COllege <b>Delta</b> Practice");
document.querySelector("body").append(ptag);