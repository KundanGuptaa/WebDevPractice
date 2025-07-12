let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = input.value;
    ul.appendChild(item);
    let delbtn = document.createElement("button");
    delbtn.innerText = 'Delete';
    delbtn.classList = 'delete';
    item.appendChild(delbtn);
    input.value = "";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
});

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         console.log(delbtns);
//         let par = this.parentElement;
//         par.remove();
//     });
// }