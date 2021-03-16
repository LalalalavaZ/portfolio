// menu scroll disappear

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//         document.getElementById("menu").style.top = "0";
//       } else {
//         document.getElementById("menu").style.top = "-300px";
//       }
//       prevScrollpos = currentScrollPos;
//     }


//hide mainsec by menu
var menuSec = document.querySelector('.menusec');
// for (var i =0; i < menuSec.length; i++){
//     menuSec[i].classList.add('hidden');   
// }
// console.log(menuSec.classList.contains("menusec"))
// menuSec[0].classList.remove('hidden');

var portfolioSec = document.getElementById("#portfolio");
var randSec = document.getElementById("#randart");
var abtmeSec = document.getElementById("#abtme");
// portfolioSec.classList.add('hidden');
var  prtfMenu = document.getElementById("menu-prtf");
var randMenu = document.getElementById("menu-rand");
var abtmeNenu = document.getElementById("menu-abtme");

prtfMenu.onclick = function(){
    portfolioSec.style.display = "block";
}


//cursor prtfsec
// mouseX = event => {
//     return event.clientX;
// };

// mouseY = event => {
//     return event.clientY;
// };