let info = document.getElementById("input");

let calculate=(number)=>{
    info.value+=number;
}

function result(){
    try {
        info.value=eval(info.value);
        
    } catch (error) {
        alert("Please enter valid input");
    }
}

function clr(){
    info.value = " ";
}

function erase(){
    info.value = info.value.slice(0, -1);
}