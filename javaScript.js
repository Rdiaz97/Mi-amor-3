const j= document.querySelector(".j");
const u= document.querySelector(".u");
const a= document.querySelector(".a");
const n= document.querySelector(".n");
const img1= document.querySelector(".img1");
const img2= document.querySelector(".img2");
const img3= document.querySelector(".img3");


j.addEventListener("click", function(){
    alert("No pinches aqui, que crece mi amor por ti <3");
})
u.addEventListener("click", function(){
    alert("Otra vez, que pena");
})
a.addEventListener("click", function(){
    alert("<3");
})
n.addEventListener("click", function(){
    alert("Oh no, morire de amor");
})

j.addEventListener("click", function(){
    j.classList.add("animation-rigth");
})

u.addEventListener("click", function(){
    u.classList.add("animation-left");
})

img1.addEventListener("click", function(){
    j.classList.remove("animation-rigth");
})

img2.addEventListener("click", function(){
    j.classList.remove("animation-rigth");
})

img3.addEventListener("click", function(){
    u.classList.remove("animation-left");
})