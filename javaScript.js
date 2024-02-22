console.log("weatherAPI");
const apiKey ="cb1b218b4c769068f1325423d8aa97c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})