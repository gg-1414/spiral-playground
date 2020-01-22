const spiral_custom = {
	stop: false, 
	draw: null 
};

spiral_custom.draw = function() {
	this.stop = false
  let time = 0.0;

	function mainLoop() {
		console.log('inside spiral custom')

		if (spiral_custom.stop) {
			window.cancelAnimationFrame(rafID)
			return
		}

		requestAnimationFrame(mainLoop)

		time += speedValue

		context.clearRect(0,0,canvas.width,canvas.height)
		context.save() // save the state of everything called before 
		context.translate(canvas.width / 2, canvas.height / 2) // move context to center of canvas
		
    for(var i = start; i <= total; i += distance) { // i represents each line drawn
	
			// angle * (Math.PI / 180) => angle in radians
			var move_angle = ((movement + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_1 = ((angle1 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_2 = ((180 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_3 = ((270 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_4 = ((360 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			
			let moveX = -Math.cos(move_angle) * (canvas.width / 2 * Math.sin(time)) * 0.8,
					moveY = -Math.sin(move_angle) * (canvas.width / 2 * Math.sin(time)) * 0.8
	
			let line1X = Math.cos(angle_1) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)),
					line1Y = Math.sin(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time))

			context.beginPath()
			context.strokeStyle = `hsl(${i * hueComplexity}, 100%, 60%)`
			context.moveTo(moveX, moveY)
			context.lineTo(line1X, line1Y)
			context.lineWidth = thickness
			context.stroke()
		}    
		
		context.restore() // draw the saved state 
	}

	rafID = window.requestAnimationFrame(mainLoop)
	window.requestAnimationFrame(mainLoop)
}
