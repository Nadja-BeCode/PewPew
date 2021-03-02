
// SETUP
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let cannon = new Image();
cannon.src = './img/myCannon.png';
let target = new Image();
target.src = './img/target.png';
let bomb = new Image();
bomb.src = './img/bomb.png';

//DRAW OF MY CANVAS

/*canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/

//PUT THE ELEMENTS INTO THe CANVAS
 window.onload = function() {
        ctx.drawImage(cannon,cannonXpos, cannonYpos, 150, 150);//to move horizontally
        ctx.drawImage(target,400,272, 100, 100);
        ctx.drawImage(bomb,300,638, 70, 70);
        ctx.stroke();
    };

//MOVE THE CANNON
let cannonXpos = 0;
let cannonYpos = 400;
let cannonSpeed = 5;


function cannonMove(){
   cannonYpos -= cannonSpeed;
}










/*canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/

//MOVEMENT OF THE CANNON


/*window.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    setInterval(mainloop, 1000/50); //
};

let cannon = new Image();
cannon.src = './img/myCannon.png';

let cannonXpos = 0;
let cannonYpos = 400;
let cannonSpeed = 5;

function mainloop(){

    ctx.drawImage(cannon,cannonXpos, cannonYpos, 150, 150);//to move horizontally

    cannonMove();

}

function cannonMove({
    cannonYpos -= cannonSpeed;
})

function drawImage(src, x, y, w, h){
    canvasContex.drawImage(src, x, y, w, h);
}*/




/************************************************* */

/*function setupCanvas(){
    const canvas = document.getElementById("canvas");

if(canvas.getContext){
    const ctx = canvas.getContext('2d');

    let img = new Image();//Create a new image 
    img.src ="./projectile.png"//where's my image
    img.onload = function(){
    
        ctx.drawImage(img ,x, y, 50,50 );

    }

}

}*/













