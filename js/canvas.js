/*
Everything in this file you generally don't have to touch.  It takes what you do in draw.js and puts it on the Canvas.  For a beginner, you don't need to know about this right now.
*/
import { draw } from './draw.js' // We need to get the draw function that we wrote in draw.js so we can use it here.  This pulls the draw function in.

// Make the space where we will "draw" things to the screen.  This is called a canvas.
export const canvas = document.getElementById('myCanvas')
export const context = canvas.getContext('2d') // Keeps track of what is going on for us.  Kind of higher level than you need to know at the moment.

export function initCanvas() {
	// Set canvas size
	resizeCanvas(canvas)

	// Handle window resize
	window.addEventListener('resize', () => resizeCanvas(canvas))

	// Start render loop
	animate()

	function resizeCanvas(canvas) {
		canvas.width = window.innerWidth * 0.95
		canvas.height = window.innerHeight * 0.95
	}

	function animate() {
		context.clearRect(0, 0, canvas.width, canvas.height)

		draw()

		requestAnimationFrame(animate)
	}
}
