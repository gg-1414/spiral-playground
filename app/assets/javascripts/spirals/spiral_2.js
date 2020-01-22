const spiral2 = {
	stop: false, 
	draw: null
};

spiral2.draw = function() {
  this.stop = false
  let time = 0.0
  
  function mainLoop() {
    console.log('inside spiral 2')

    if (spiral2.stop) {
      window.cancelAnimationFrame(rafID)
      return 
    }

    requestAnimationFrame(mainLoop)

    time += speedValue
    
    context.clearRect(0,0,canvas.width,canvas.height)
    context.save() // save the state of everything called before 
    context.translate(canvas.width / 2, canvas.height / 2) // move context to center of canvas
    
    for(var i = 0; i < 360; i += 5) { // i represents each line drawn

      // angle * (Math.PI / 180) => angle in radians
      var angle_1 = ((45 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
      var angle_2 = ((90 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
      var angle_3 = ((180 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
      var angle_4 = ((360 + i) + 180 * Math.sin(time)) * (Math.PI / 180)
      
      let moveX = -Math.cos(angle_1) * (canvas.width / 2 * Math.sin(time)) * 0.8,
          moveY = -Math.sin(angle_1) * (canvas.width / 2 * Math.sin(time)) * 0.8

      let line1X = Math.cos(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)),
          line1Y = Math.sin(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time))

      let line2X = Math.cos(angle_3) * canvas.width,
          line2Y = Math.sin(angle_3) * canvas.width

      let line3X = Math.cos(angle_4) * canvas.width,
          line3Y = Math.sin(angle_4) * canvas.width


      context.beginPath()
      context.strokeStyle = `hsl(${i * 50}, 100%, 60%)`
      context.moveTo(moveX, moveY)
      context.lineTo(line1X, line1Y)
      context.lineTo(line2X, line2Y)
      context.lineTo(line3X, line3Y)
      context.lineWidth = 5
      context.stroke()
    }    
    
    context.restore() // draw the saved state 
  }

  rafID = requestAnimationFrame(mainLoop)
  window.requestAnimationFrame(mainLoop)
}