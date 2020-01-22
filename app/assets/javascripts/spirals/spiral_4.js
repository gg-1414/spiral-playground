const spiral4 = {
	stop: false, 
	draw: null, 
};

spiral4.draw = function() {
	this.stop = false 
  var time = 0.0
  
  function mainLoop() {
		console.log('inside spiral 4')

		if (spiral4.stop) {
			window.cancelAnimationFrame( rafID )
			return 
		}

		requestAnimationFrame(mainLoop)

		time += speedValue
		
		context.clearRect(0,0,canvas.width,canvas.height)
		context.save() // save the state of everything called before 
		context.translate(canvas.width / 2, canvas.height / 2) // move context to center of canvas
		
		for(var i = 0; i < 360; i += 50) { // i represents each line drawn

			// angle * (Math.PI / 180) => angle in radians
			var angle_1 = ((15 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_2 = ((45 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_3 = ((90 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_4 = ((270 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_5 = ((360 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			
			let moveX = -Math.cos(angle_1) * (canvas.width / 2 * Math.sin(time)) * 0.8,
					moveY = -Math.sin(angle_1) * (canvas.width / 2 * Math.sin(time)) * 0.8

			let line1X = Math.cos(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)),
					line1Y = Math.sin(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time))

			let line2X = Math.cos(angle_3) * canvas.width / 3,
					line2Y = Math.sin(angle_3) * canvas.width / 3

			let line3X = Math.cos(angle_4) * canvas.width / 4,
					line3Y = Math.sin(angle_4) * canvas.width / 4

			let line4X = Math.cos(angle_5) * canvas.width / 5,
					line4Y = Math.sin(angle_5) * canvas.width / 5
			
			context.beginPath()
			context.strokeStyle = `hsl(${i * 50}, 100%, 60%)`
			context.moveTo(moveX, moveY)
			context.lineTo(line1X, line1Y)
			context.lineTo(line2X, line2Y)
			context.lineTo(line3X, line3Y)
			context.lineTo(line4X, line4Y)
			context.lineWidth = 2
			context.lineWidth = 4
			context.stroke()
		}    
		
		context.restore() // draw the saved state 
  }

	rafID = requestAnimationFrame(mainLoop)
	window.requestAnimationFrame(mainLoop)
}