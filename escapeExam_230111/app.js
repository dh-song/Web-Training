// import GameCanvas from './panel/game-canvas.js'
import GameCanvas from './panel/game-canvas.js'

window.addEventListener("load", function () {

	const gameCanvas = new GameCanvas();
	gameCanvas.initItems();
	gameCanvas.run();
	
});