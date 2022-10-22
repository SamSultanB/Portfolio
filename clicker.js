let counter = 0;
function count() {
    counter += 1;
    document.getElementById("click").innerHTML = counter;
    if(counter == 5){
        document.getElementById("ButtonBar").style.background = "blue";
    }else if(counter == 10){
        document.getElementById("ButtonBar").style.background = "yellow";
    }else if(counter == 20){
        document.getElementById("ButtonBar").style.background = "red";
    }else if(counter == 50){
        document.getElementById("ButtonBar").style.background = "silver";
    }else if(counter == 100){
        document.getElementById("ButtonBar").style.background = "gold";
    }
}

function reset() {
    counter = 0;
    document.getElementById("click").innerHTML = counter;
    document.getElementById("ButtonBar").style.background = "hotpink";

}