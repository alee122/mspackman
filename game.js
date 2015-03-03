function init() 
{
	var canvas = document.getElementById('game_canvas');
  	var ctx = canvas.getContext('2d');

  	ctx.drawImage(pacman10-hp-sprite.png, 
  					321, 0, 465, 138, 0, 0, 465, 138);

	ctx.drawImage(pacman10-hp-sprite.png, 
					81, 20, 22, 22, 34, 29, 22, 22);
}