// let now = new Date();
// let date = now.getDate();
// let hours = now.getHours();
// let minutes = [
// 	"00",
// 	"01",
// 	"02",
// 	"03",
// 	"04",
// 	"05",
// 	"06",
// 	"07",
// 	"08",
// 	"09",
// 	"10",
// 	"11",
// 	"12",
// 	"13",
// 	"14",
// 	"15",
// 	"16",
// 	"17",
// 	"18",
// 	"19",
// 	"20",
// 	"21",
// 	"22",
// 	"23",
// 	"24",
// 	"25",
// 	"26",
// 	"27",
// 	"28",
// 	"29",
// 	"30",
// 	"31",
// 	"32",
// 	"33",
// 	"34",
// 	"35",
// 	"36",
// 	"37",
// 	"38",
// 	"39",
// 	"40",
// 	"41",
// 	"42",
// 	"43",
// 	"44",
// 	"45",
// 	"46",
// 	"47",
// 	"48",
// 	"49",
// 	"50",
// 	"51",
// 	"52",
// 	"53",
// 	"54",
// 	"55",
// 	"56",
// 	"57",
// 	"58",
// 	"59",
// ];
// let minute = minutes[now.getMinutes()];
// let year = now.getFullYear();
// let days = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday",
// ];
// let day = days[now.getDay()];
// let months = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];
// let month = months[now.getMonth()];

// let currentday = document.querySelector("#date");
// currentday.innerHTML = `${month}${date},${year}`;

// let currenttime = document.querySelector("#time");
// currenttime.innerHTML = `${day} ${hours}:${minute}`;

// function searchCity(event) {
// 	event.preventDefault();
// 	let cityInput = document.querySelector("#city-input");
// 	let cityElement = document.querySelector(".localcity");
// 	cityElement.innerHTML = cityInput.value;

// 	let apiKey = "f4fa6962f95e93ddf91bbb3cb979b7b4";
// 	let units = "metric";
// 	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
// 	axios.get(apiUrl).then(showTemperature);
// }
// let cityForm = document.querySelector("#city-form");
// cityForm.addEventListener("submit", searchCity);

function formatDate(timestamp) {
	let date = new Date(timestamp);
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
	let localtemperatureElement = document.querySelector("#localtemperature");
	let localcityElement = document.querySelector("#localcity");
	let descriptionElement = document.querySelector("#description");
	let humidityElement = document.querySelector("#humidity");
	let windElement = document.querySelector("#wind");
	let dateElement = document.querySelector("#date");
	let iconElement = document.querySelector("#icon");

	localtemperatureElement.innerHTML = Math.round(response.data.main.temp);
	localcityElement.innerHTML = response.data.name;
	descriptionElement.innerHTML = response.data.weather[0].description;
	humidityElement.innerHTML = response.data.main.humidity;
	windElement.innerHTML = Math.round(response.data.wind.speed);
	dateElement.innerHTML = formatDate(response.data.dt * 1000);
	iconElement.setAttribute(
		"src",
		`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	);
	iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
	let apiKey = "f4fa6962f95e93ddf91bbb3cb979b7b4";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showTemperature);
}

function handlesubmit(event) {
	event.preventDefault();
	let cityInputElement = document.querySelector("#city-input");
	search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesubmit);
