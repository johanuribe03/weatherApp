const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"});
    const respData = await resp.json();

    // console.log(respData, KtoC(respData.main.temp));
    console.log(respData); //Show data on console
    

    addWeatherToPage(respData);
}

getWeatherByLocation('Miami');


function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <h2> <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" /> ${temp}°F</h2>
        <small>${data.weather[0].main}</small>
    `;

    // CleanUP results
    main.innerHTML = '';

    main.appendChild(weather);
}

function KtoC(K) {
    // return (K - 273.15).toFixed(2); // Celsius 2 digits
    return (1.8*(K - 273.15)+32).toFixed(2); // Farenheit 2 digits

}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city =search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});


{/* <small>in ${search.value}</small> location */}


// const apikey = "3265874a2c77ae4a04bb96236a642d2f";

// const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

// async function getWeatherByLocation(location) {
//     const resp = await fetch(url(location), {
//         origin: "cors"});
//     const respData = await resp.json();

//     console.log(respData, KtoC(respData.main.temp));
// }

// getWeatherByLocation('Bogota');



// function KtoC(K) {
//     return (K - 273.15).toFixed(2); // 2 digits
// }