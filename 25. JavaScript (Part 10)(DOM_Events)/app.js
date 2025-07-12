let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    let heading=document.querySelector("h1");
    let color=randomColorGenerator();
    heading.innerText=color;
    let div=document.querySelector("div");
    div.style.backgroundColor=color;

})

function randomColorGenerator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color=`rgb(${red},${green},${blue})`
    return color;
}