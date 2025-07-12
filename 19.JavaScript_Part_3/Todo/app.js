let todo=[];
let req;
while(true){
    if(req=="quit"){
        console.log("App quitting");
        break;
    }
    if(req=="list"){
        console.log("-----------");
        for(let i=0;i<=todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let task=prompt("Please enter your tast you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if(req=="delete"){
        let idx=prompt("Enter your index of task you want to delete.");
        todo.splice(idx,1);
        console.log("Deleted");
    }
    else{
        console.log("Wrong requst entered");
    }
    req=prompt("please enter your requst");
}