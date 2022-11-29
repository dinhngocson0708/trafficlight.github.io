document.getElementById("buttonStop").onclick=redlight;
document.getElementById("buttonSlow").onclick=yellowlight;
document.getElementById("buttonGo").onclick=greenlight;

function redlight(){
    chuabat();
    document.getElementById('Stoplight').style.backgroundColor="red";
}
function yellowlight(){
    chuabat();
    document.getElementById('Slowlight').style.backgroundColor="yellow";
}
function greenlight(){
    chuabat();
    document.getElementById('Golight').style.backgroundColor="green";
}
function chuabat(){
    document.getElementById('Stoplight').style.backgroundColor="black";
    document.getElementById('Slowlight').style.backgroundColor="black";
    document.getElementById('Golight').style.backgroundColor="black";
}