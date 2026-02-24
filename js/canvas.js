export function initCanvas(canvas) {
	const ctx = canvas.getContext('2d')

	// Set canvas size
	resizeCanvas(canvas)

	// Handle window resize
	window.addEventListener('resize', () => resizeCanvas(canvas))

	// Start render loop
	animate()

	function resizeCanvas(canvas) {
		canvas.width = window.innerWidth * 0.8
		canvas.height = window.innerHeight * 0.6
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		drawExample(ctx, canvas)

		requestAnimationFrame(animate)
	}
}

function draw(ctx, canvas) {
	const time = Date.now() * 0.002

	const x = canvas.width / 2 + Math.cos(time) * 100
	const y = canvas.height / 2 + Math.sin(time) * 100

	ctx.fillStyle = 'cyan'
	ctx.beginPath()
	ctx.arc(x, y, 30, 0, Math.PI * 2)
	ctx.fill()
}
