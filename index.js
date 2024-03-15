const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img=document.querySelector('.weather-img');
const temprature=document.querySelector('.temprature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
async function checkWeather(city){
    const api_key = "2c295bf1039e8413271aac6bbdddbec1";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => 
        response.json());
 
    temprature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`; 
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed =`${weather_data.wind.speed}Km/Hr`;
    
    
    switch(weather_data.weather[0].main){
      case 'Clouds':
        weather_img.src = "image/cloud2.png";
        break;
      case 'Clear':
        weather_img.src = "image/sun.png";
        break;
      case 'Rain':
        weather_img.src = "image/cloud1.png";
        break;
      case 'Mist':
        weather_img.src = "image/mist.png";
        break;
      case 'Snow':
        weather_img.src = "image/snow.jpg";
        break;
    }
  }

searchbtn.addEventListener('click',()=>{
  checkWeather(inputBox.value);
});
