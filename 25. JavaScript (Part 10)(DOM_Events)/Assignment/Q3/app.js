// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let h2=document.querySelector('h2');
let input=document.querySelector('input');
input.addEventListener('input',function(){
    h2.innerText=input.value.replace(/[^a-zA-Z\s]/g, '');
})