function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = cityInput.value;

    // 971c700d94fe02fd679d3cbd26c77877

    const dummyWeatherData = {
        temperature: '25°C',
        description: 'Sunny',
        humidity: '50%',
        wind: '10 m/s',
    };

    const weatherHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${dummyWeatherData.temperature}</p>
        <p>Description: ${dummyWeatherData.description}</p>
        <p>Humidity: ${dummyWeatherData.humidity}</p>
        <p>Wind: ${dummyWeatherData.wind}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}
