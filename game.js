function init()
{
	var canvas = document.getElementById('game_canvas');
  	var ctx = canvas.getContext('2d');

  	var img = new Image();   // Create new img element

  	img.onload = function(){
  		ctx.drawImage(img, 321, 0, 465, 138, 0, 0, 465, 138);
  		ctx.drawImage(img, 81, 20, 22, 22, 34, 29, 22, 22);
  	}

	img.src = 'pacman10-hp-sprite.png';

  	
}
/*
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0);
    ctx.beginPath();
    ctx.moveTo(30,96);
    ctx.lineTo(70,66);
    ctx.lineTo(103,76);
    ctx.lineTo(170,15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}*/