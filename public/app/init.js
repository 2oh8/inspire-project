// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
  controllers:{
    weatherController: new WeatherController(),
    imageController: new ImageController(),
    quoteController: new QuoteController(),
    todoController: new TodoController(),
  }
}

//Clock Functionality

var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}