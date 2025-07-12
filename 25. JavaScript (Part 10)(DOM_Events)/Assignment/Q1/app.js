// Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

const mouseDiv=document.querySelector("#mouseout");
//mouse out trigger
mouseDiv.addEventListener('mouseout',function(){
    mouseDiv.style.backfaceVisibility='rgb(255, 148, 228)';
    mouseDiv.textContent='Mouse out event triggered';
    setTimeout(()=>{
        mouseDiv.style='rgb(135, 79, 121)';
        mouseDiv.textContent='Hover over me, then move your mouse out!';
    },1000);
});
//keypress event
document.addEventListener('keypress',function(event){
    alert('Key press:'+ event.Key);
});

//Scroll
window.addEventListener('scroll',function(){
    console.log("Scroll event detected! Scroll Position",window.scrollY);
})

//load
window.addEventListener('load',function(){
    console.log('Pafe fully loaded !');
});