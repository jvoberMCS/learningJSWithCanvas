/*
Make functions here that you will pass to draw(), that will then be executed in canvas.js

Basically, anything you do in draw() gets animated on the screen!
*/
export function draw(ctx, canvas) {
	drawRandomBall(ctx, canvas, 'cyan')
}

function drawRandomBall(ctx, canvas, ballColor) {
	const time = Date.now() * 0.002

	const x = canvas.width / 2 + Math.cos(time) * 100
	const y = canvas.height / 2 + Math.sin(time) * 100

	ctx.fillStyle = ballColor
	ctx.beginPath()
	ctx.arc(x, y, 30, 0, Math.PI * 2)
	ctx.fill()
}
