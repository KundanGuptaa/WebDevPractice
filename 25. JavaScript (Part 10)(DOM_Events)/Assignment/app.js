// Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// mouseout event example
const mouseDiv = document.createElement('div');
mouseDiv.textContent = 'Hover over me, then move your mouse out!';
mouseDiv.style.width = '300px';
mouseDiv.style.height = '50px';
mouseDiv.style.background = '#e0e0e0';
mouseDiv.style.margin = '10px';
mouseDiv.style.textAlign = 'center';
mouseDiv.style.lineHeight = '50px';
document.body.appendChild(mouseDiv);

mouseDiv.addEventListener('mouseout', function () {
    mouseDiv.style.background = '#ffcccc';
    mouseDiv.textContent = 'Mouse out event triggered!';
    setTimeout(() => {
        mouseDiv.style.background = '#e0e0e0';
        mouseDiv.textContent = 'Hover over me, then move your mouse out!';
    }, 1000);
});

// keypress event example
document.addEventListener('keypress', function (event) {
    alert('Key pressed: ' + event.ctrlKey);
});

// scroll event example
window.addEventListener('scroll', function () {
    console.log('Scroll event detected! Scroll position:', window.scrollY);
});

// load event example
window.addEventListener('load', function () {
    console.log('Page fully loaded!');
});