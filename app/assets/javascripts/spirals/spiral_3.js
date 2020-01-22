const spiral3 = {
	stop: false, 
	draw: null
}

spiral3.draw = function() {
	this.stop = false 
  var time = 0.0
  
  function mainLoop() {
		console.log('inside spiral 3')

		if (spiral3.stop) {
			window.cancelAnimationFrame(rafID)
			return 
		}

		requestAnimationFrame(mainLoop)
		
	  time += speedValue
	  
	  context.clearRect(0,0,canvas.width,canvas.height)
	  context.save() // save the state of everything called before 
	  context.translate(canvas.width / 2, canvas.height / 2) // move context to center of canvas
	  
	  for(var i = 0; i < 720; i += 2) { // i represents each line drawn

			// angle * (Math.PI / 180) => angle in radians
			var angle_1 = ((45 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_2 = ((90 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_3 = ((180 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_4 = ((270 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			var angle_5 = ((360 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
			
			let moveX = -Math.cos(angle_1) * (canvas.widtth / 2 * Math.sin(time)) * 0.8,
					moveY = -Math.sin(angle_1) * (canvas.widtth / 2 * Math.sin(time)) * 0.8

			let line1X = Math.cos(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)),
					line1Y = Math.sin(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time))

			let line2X = Math.cos(angle_3) * canvas.width,
					line2Y = Math.sin(angle_3) * canvas.width

			let line3X = Math.cos(angle_4) * canvas.width,
					line3Y = Math.sin(angle_4) * canvas.width

			let line4X = Math.cos(angle_5) * canvas.width,
					line4Y = Math.sin(angle_5) * canvas.width
			
			context.beginPath()
			context.strokeStyle = `hsla(${i * 1}, 100%, 100%, 1)`
			context.moveTo(moveX, moveY)
			context.lineTo(line1X, line1Y)
			context.lineTo(line2X, line2Y)
			context.lineTo(line3X, line3Y)
			context.lineTo(line4X, line4Y)
			context.lineWidth = 6
			context.stroke()
	  }    
	  
	  context.restore() // draw the saved state 
  }

  rafID = requestAnimationFrame(mainLoop)
	window.requestAnimationFrame(mainLoop)
}