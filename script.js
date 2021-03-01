
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let image = new Image();
image.src = './projectile.png';
//DRAW OF MY CANVAS

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//MOVEMENT OF THE CANNON


 image.onload = function() {
        ctx.drawImage(this, 50 ,50);
        
    };
/************************************************* */

function setupCanvas(){
    const canvas = document.getElementById("canvas");

if(canvas.getContext){
    const ctx = canvas.getContext('2d');

    let img = new Image();//Create a new image 
    img.src ="./projectile.png"//where's my image
    img.onload = function(){
    
        ctx.drawImage(img ,x, y, 50,50 );

    }

}

}