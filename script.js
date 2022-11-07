const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"});
    const respData = await resp.json();

    console.log(respData, KtoC(respData.main.temp));

    addWeatherToPage(respData);
}

getWeatherByLocation('Bogota');


function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <h2>${temp}°C</h2>
    `;

    // CleanUP results
    main.innerHTML = '';

    main.appendChild(weather);
}

function KtoC(K) {
    return (K - 273.15).toFixed(2); // 2 digits
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