//this will hold all of the weather information 
// this will hold apis. 
var APIkey = "10c003145471f029ca726d5244e3c8a4";
var cityInput = document.getElementById('city');
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIkey;
var addButton = document.querySelector("#submit");
var weather = localStorage.getItem("weather");
var history = json.parse(localStorage.getItem("submit"));
city.textContent = weather;

//need to add a function to get it to save the city
//this will call the api information by clicking the submit button
addButton.addEventListener("click", function () {
    if (city === textContent) {
        city.textContent = weather;
        localStorage.setItem("click", weather);
    }
});
console.log(cityInput.input);


// this will call the weather information for the specific city requested, create loop
function getAPI(queryURL) {
    fetch(queryURL)
        .then(function (response) {
            for (i === coord); {
                "coord": {
                    "lon": 10.99,
                        "lat": 44.34
                },
            }
            //function to call the weather, create loop
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
                // function to call the temperatures  create loop 
                "base": "stations",
                    "main": {
                "temp": 298.48,
                    "feels_like": 298.74,
                        "temp_min": 297.56,
                            "temp_max": 300.05,
                                "pressure": 1015,
                                    "humidity": 64,
                                        "sea_level": 1015,
                                            "grnd_level": 933
            },
            // function to call the wind  create loop
            "visibility": 10000,
                "wind": {
                "speed": 0.62,
                    "deg": 349,
                        "gust": 1.18
            },
            //function to call if raining  create loop
            "rain": {
                "1h": 3.16
            },
            //function to call if cloudy  create loop
            "clouds": {
                "all": 100
            },
        }
        }
getAPI(queryURL);






