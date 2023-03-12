let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = [
	"00",
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"30",
	"31",
	"32",
	"33",
	"34",
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"50",
	"51",
	"52",
	"53",
	"54",
	"55",
	"56",
	"57",
	"58",
	"59",
];
let minute = minutes[now.getMinutes()];
let year = now.getFullYear();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[now.getDay()];
let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
let month = months[now.getMonth()];

let current = document.querySelector(".dateandtime");
current.innerHTML = `${day} ${hours}:${minute} <br> ${month}${date},${year}`;

function searchCity(event) {
	event.preventDefault();
	let cityInput = document.querySelector("#city-input");
	let cityElement = document.querySelector(".localcity");
	cityElement.innerHTML = cityInput.value;

	let apiKey = "f4fa6962f95e93ddf91bbb3cb979b7b4";
	let units = "metric";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
	axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);

function showTemperature(response) {
	document.querySelector(".localtemperature").innerHTML = Math.round(
		response.data.main.temp
	);
}
