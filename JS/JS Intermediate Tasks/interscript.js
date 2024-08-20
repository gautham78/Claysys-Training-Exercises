const arr = [1,5,10,7,2];
arr.sort(function(a, b){return a - b});
document.getElementById("sort").innerHTML=arr;
document.getElementById("larg").innerHTML="Largest is: "+ arr[4];


function ctoF(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius =35;
let fahr = ctoF(celsius);

document.getElementById("cf").innerHTML="35C is "+fahr+"F";

function paraChange() {
    document.getElementById("para").innerHTML = "There u go. Its changed !!! ";
}

function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

const button = document.getElementById('dark');
button.addEventListener('click', darkMode);