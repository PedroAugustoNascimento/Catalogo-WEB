
let time = 2000;
let currentImg = 0;
let img = document.querySelectorAll(".slider img");
let max = img.length;

function nextImg(){
    img[currentImg].classList.remove("selected");
    currentImg++;
    if(currentImg >= max){
        currentImg = 0;
    }
    img[currentImg].classList.add("selected");
}

function start(){
    setInterval(() => {
        nextImg();
    }, time);
}

window.addEventListener("load", start);
