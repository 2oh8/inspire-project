function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	function renderWeather(){
	
		weatherService.getWeather(function(weather){
		console.log(weather);
		let farenheit = Math.floor(((weather.main.temp - 273) * 1.8) + 32)
		let highTemp = Math.floor(((weather.main.temp_max - 273) * 1.8) + 32)
		let lowTemp = Math.floor(((weather.main.temp_min - 273) * 1.8) + 32)

		//What can you do with this weather object?
		document.getElementById("weather").innerHTML = `
		
		<div class="inner-card col s6">
		<h2>${farenheit}°</h2>
		<p>${weather.name}</p>
		</div>
		<div class="inner-card col s6">
		<img class="weather-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"></img>
		<p>hi: ${highTemp}°</p><p>lo: ${lowTemp}°</p>
		</div>
		
		`
	})
	}
renderWeather()
}
