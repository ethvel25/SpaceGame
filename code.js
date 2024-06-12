// Initialize variables
var bg1 ={x:0, y: 0, w:323, h:450, s:2, img:"bg1"};
var bg2 ={x:320, y: 0, w:323, h:450, s:2, img:"bg2"};
var asteroid1 ={x:100, y:-20, w:50, h:50, s:2, img:"asteroid1"};
var asteroid2 ={x:200, y:-20, w:50, h:50, s:2, img:"asteroid2"};
var asteroid3 ={x:300, y:-10, w:50, h:50, s:2, img:"asteroid3"};
var asteroids = [asteroid1, asteroid2];
var enemies = [asteroid3];
var rocket ={x:150, y:230, w:50, h:100,s:7, img:"rocket"};
var score = 0;
// Functions to set up game

 function scrollBg(){
   bg1.x+=bg1.s;
   bg2.x+=bg2.s;
   setPosition(bg1.img, bg1.x, bg1.y, bg1.w, bg1.h);
   setPosition(bg2.img, bg2.x, bg2.y, bg2.w, bg2.h);
//    find the wrap around the screen
    if (bg1.x>320){
     bg1.x=-319;
   }
   if (bg2.x>320){
   bg2.x=-319;
   }
 }

function setPosition(el, x, y, w, h){
	var element= document.getElementById(el);
         element.style.position = 'absolute';
					element.style.left = x + 'px';
					element.style.top = y + 'px';
					element.style.width = w + 'px';
					element.style.height =h + 'px';

}
setInterval(function() {
scrollBg();
}, 100);
