const apiKey = '971c700d94fe02fd679d3cbd26c77877';

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName) {
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={971c700d94fe02fd679d3cbd26c77877}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(weatherData) {
    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = '';

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    const weatherInfoHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfoContainer.innerHTML = weatherInfoHTML;
}
