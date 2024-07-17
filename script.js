
let time = 2000; 
let currentImg = 0;
let img = document.querySelectorAll(".slider img");
let max = img.length;

/*Função para passar para a próxima imagem no banner*/
function nextImg(){
    img[currentImg].classList.remove("selected");
    currentImg++;
    if(currentImg >= max){
        currentImg = 0;
    }
    img[currentImg].classList.add("selected");
}

/*Função para chamar a nextImg() no intervalo da variável time*/
function start(){
    setInterval(() => {
        nextImg();
    }, time);
}

/*Startando a função assim que a página é carregada*/
window.addEventListener("load", start);
