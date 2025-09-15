const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d0f348bd7msh6f7c9df731f574cp122c7fjsn97662089f4f5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city)=> {
    cityName.innerHTML = city
    fetch(url+ city , options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.log(err));
}

submit.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Delhi");