/*
Make functions here that you will pass to draw(), that will then be executed in canvas.js

Basically, anything you do in draw() gets animated on the screen!
*/

import { context, canvas } from './canvas.js'

export function draw() {
	drawRandomBall('cyan')
}

function drawRandomBall(ballColor) {
	const time = Date.now() * 0.002

	const x = canvas.width / 2 + Math.cos(time) * 100
	const y = canvas.height / 2 + Math.sin(time) * 100

	context.fillStyle = ballColor
	context.beginPath()
	context.arc(x, y, 30, 0, Math.PI * 2)
	context.fill()
}
