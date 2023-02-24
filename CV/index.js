//evento del scroll
let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollArriba = document.documentElement.scrollTop
    for(var i=0; i< animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -290 < scrollArriba){
            animado[i].style.opacity = 1;
        }
    }
}
window.addEventListener("scroll", mostrarScroll);

//seleccion de fotos de perfil
let botonUno = document.getElementById('uno');
let botonDos = document.getElementById('dos');
let botonTres = document.getElementById('tres');
let retrato= document.getElementById('imagen');

botonUno.onclick = function(){
    retrato.src = "dos.jpg"
}

botonDos.onclick = function(){
    retrato.src = "IMG-20230128-WA0127.jpg"
}

botonTres.onclick = function(){
    retrato.src = "tres.jpg"
}
