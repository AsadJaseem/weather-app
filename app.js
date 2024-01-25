function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const cityInput = document.getElementById('cityInput');
    const weatherInfoDiv = document.getElementById('weatherInfo');

    const cityName = cityInput.value.trim();

    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
            } else {
                const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
                const description = data.weather[0].description;
                const result = `Temperature: ${temperature}°C, ${description}`;

                weatherInfoDiv.innerHTML = result;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}
