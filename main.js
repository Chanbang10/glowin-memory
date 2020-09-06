const api = {
    key:    "7e5c11ce235632d1904f971e6e2899c0"
    base:  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}& "
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(' ${api.base} weather?q=$query}&units=metric&APPID=$api.key}' )
    return weather. json()
        .then(weather ={
}).then(displayResults);
}

function displayResults (weather)  {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = ' ${weather.name}, ${weather.sys.country}' ;
    let now =new Date();
    let date= document.querySelector(' .location .date');
    date.innerText =dateBuilder(now);
    let temp = document.querySelector(' .current .temp');
    temp.innerHTML =  '${Math.round(weather.main.temp)<span></span>';
    
    let weather_el = document.querySelector(' .current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hihigh =document.querySelector('.hi-high');
    hihigh.innerHTML = '${Math.round(weather.main.temp_min)}°c/ ${Math.round(weather.main.temp_max)}°c';
}
function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
       
       let day = days[d.getDay()];
        let date = d.getDate();
        let month =months[d.getMonths()];
        let year = d.getFullYear();
   
}

return '${day}  ${date}  ${month} ${year}';
