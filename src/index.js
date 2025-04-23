async function getWeather(location) {
    try {
        const response = await fetch(
            'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
                location +
                '?unitGroup=us&key=TVCJ46CCZVA4HMZ48S5PNR3H4&contentType=json',
            {
                method: 'GET',
                headers: {},
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function processWeather(location) {
    const weatherData = await getWeather(location);

    const weatherObj = {
        address: weatherData.address,
        currentConditions: weatherData.currentConditions,
        days: weatherData.days.slice(0, 7),
        description: weatherData.description,
    };

    console.log(weatherObj);
}

function showWeather() {
    document.createElement('div');
}

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('#weather-search');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const location = searchInput.value.trim();
    if (location) {
        processWeather(location);
    }
    searchInput.value = '';

    showWeather();
});
