async function getWeather() {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weather-info');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const resultHtml = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
        `;

        weatherInfo.innerHTML = resultHtml;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
    }
}
