// const apiKey = '7c5b27b9caa4499c9ba64605231009';
// const apiUrlBase = 'http://api.weatherapi.com/v1/current.json';


// async function getWeatherData(location) {
//     try {
//         const apiUrl = `${apiUrlBase}?key=${apiKey}&q=london&aqi=no`;
//         const response = await fetch(apiUrl, { mode: 'cors' });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// getWeatherData()



const apiKey = '7c5b27b9caa4499c9ba64605231009'
const apiUrlBase = 'http://api.weatherapi.com/v1/current.json'

async function getWeatherData() {
    try{
        const apiUrl = `${apiUrlBase}?key=${apiKey}&q=london&aqi=no`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        if ( !response.ok){
            throw new Error('Network response is not okay')
        }
        const data = await response.json();
        return data;
        console.log(data)
    }catch{
        console.error('Error', error)
    }
    
}


function displayWeatherData(weather) {
    const weatherDataDiv = document.getElementById('weatherData');
    const location = weather.location;
    const current = weather.current;

    if (location && current) {
        weatherDataDiv.innerHTML = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <p>Temperature: ${current.temp_c}°C</p>
            <p>Weather: ${current.condition.text}</p>
        `;
    } else {
        weatherDataDiv.innerHTML = '<p>Weather data not available.</p>';
    }
}


// Event listener for the "Get Weather" button
const getWeatherBtn = document.getElementById('getWeatherBtn');
getWeatherBtn.addEventListener('click', async () => {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();
    
    if (location !== '') {
        const weatherData = await getWeatherData(location);
        if (weatherData) {
            displayWeatherData(weatherData);
        }
    } else {
        alert('Please enter a location.');
    }
});



// const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?${searchTerm}&appid=49257f6591cfc3ed8daf0b5970d519cb&units=standard`,
//     { mode: 'cors' }
//   );