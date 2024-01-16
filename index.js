const apiKey = "b9bf11dc04a9f9941a5df6e404919ae4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();

    console.log(data);
}
checkWeather();