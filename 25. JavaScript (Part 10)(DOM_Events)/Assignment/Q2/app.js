// Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

const button=document.createElement('button');
button.innerHTML='click me';
document.body.appendChild(button);
button.addEventListener('click',function(){
    button.style.background='green';
})