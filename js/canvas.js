/*
Everything in this file you generally don't have to touch.  It takes what you do in draw.js and puts it on the Canvas.  For a beginner, you don't need to know about this right now.
*/
import { draw } from './draw.js'

export function initCanvas(canvas) {
	const ctx = canvas.getContext('2d')

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
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		draw(ctx, canvas)

		requestAnimationFrame(animate)
	}
}
