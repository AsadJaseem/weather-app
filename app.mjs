function getWeather() {
    const apiKey = '971c700d94fe02fd679d3cbd26c77877'; // Replace with your actual API key
    const cityInput = document.getElementById('cityInput');
    const weatherInfoDiv = document.getElementById('weatherInfo');

    const cityName = cityInput.value.trim();

    if (cityName === '') {
        weatherInfoDiv.innerHTML = 'Please enter a city name.';
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                weatherInfoDiv.innerHTML = 'City not found. Please enter a valid city name.';
            } else {
                const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
                const description = data.weather[0].description;
                const result = `Temperature: ${temperature}°C, ${description}`;

                weatherInfoDiv.innerHTML = result;
                clearSearchBox(); // Clear the search box after submitting
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoDiv.innerHTML = 'Error fetching weather data. Please try again later.';
        });
}

function clearSearchBox() {
    document.getElementById('cityInput').value = '';
}

// Allow submitting by pressing Enter key
document.getElementById('cityInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
