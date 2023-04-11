function check() {
	if (document.getElementById('cityB').checked) {
		document.getElementById('city').style.display = 'block';
		document.getElementById('zip').style.display = 'none';
		document.getElementById('coord').style.display = 'none';
	}
	else if (document.getElementById('zipB').checked) {
		document.getElementById('city').style.display = 'none';
		document.getElementById('zip').style.display = 'block';
		document.getElementById('coord').style.display = 'none';
	}
	if (document.getElementById('coordB').checked) {
		document.getElementById('city').style.display = 'none';
		document.getElementById('zip').style.display = 'none';
		document.getElementById('coord').style.display = 'block';
	}
}
function GetInfo1() {
	var newName = document.getElementById("cityInput");
	fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=cd1277419f4449b6086bcee3a54ae10f').then(response => response.json()).then(data => {
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(1) + "°F";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(2) + "°F";
		}
		for (i = 1;
			i < 4;
			i++) {
			document.getElementById("pressure" + (i + 1)).innerHTML = "Pressure: " + Number((data.list[i].main.pressure));
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("cloud" + (i + 1)).innerHTML = "Cloud Cover: " + Number((data.list[i].clouds.all)) + "%";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
		}
		document.getElementById('weatherContainer').style.display = 'block';
		console.log(data)
	}
	).catch(err => alert("Something Went Wrong"))
}
function GetInfo2() {
	var zip = document.getElementById("zipInput");
	fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + zip.value + ",us" + '&appid=cd1277419f4449b6086bcee3a54ae10f').then(response => response.json()).then(data => {
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(1) + "°F";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(2) + "°F";
		}
		for (i = 1;
			i < 4;
			i++) {
			document.getElementById("pressure" + (i + 1)).innerHTML = "Pressure: " + Number((data.list[i].main.pressure));
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("cloud" + (i + 1)).innerHTML = "Cloud Cover: " + Number((data.list[i].clouds.all)) + "%";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
		}
		document.getElementById('weatherContainer').style.display = 'block';
		console.log(data)
	}
	).catch(err => alert("Something Went Wrong"))
}
function GetInfo3() {
	var coord = document.getElementById("coordInput").value;
	var coordArr = coord.split(',');
	fetch('https://api.openweathermap.org/data/2.5/forecast?lon=' + coordArr[0] + '&lat=' + coordArr[1] + '&appid=cd1277419f4449b6086bcee3a54ae10f').then(response => response.json()).then(data => {
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(1) + "°F";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number((data.list[i].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(2) + "°F";
		}
		for (i = 1;
			i < 4;
			i++) {
			document.getElementById("pressure" + (i + 1)).innerHTML = "Pressure: " + Number((data.list[i].main.pressure));
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("cloud" + (i + 1)).innerHTML = "Cloud Cover: " + Number((data.list[i].clouds.all)) + "%";
		}
		for (i = 0;
			i < 5;
			i++) {
			document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
		}
		document.getElementById('weatherContainer').style.display = 'block';
		console.log(data)
	}
	).catch(err => alert("Something Went Wrong"))
}
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
function CheckDay(day) {
	if (day + d.getDay() > 6) {
		return day + d.getDay() - 7;
	}
	else {
		return day + d.getDay();
	}
}
for (i = 0;
	i < 5;
	i++) {
	document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}
