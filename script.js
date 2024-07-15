const images = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let counter = 0;

function carrossel(){
    counter++;

    if(counter>img.length - 1){
        counter = 0;
    }

    images.style.transform = `translateX(${-counter *1280}px)`
}

setInterval(carrossel, 2000);