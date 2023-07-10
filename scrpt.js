const input =document.querySelector(".inp");
const btn =document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "786fc161912014d3d53af7e07bc3f6bf"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    var data = await response.json();
    console.log("API", data);

    
   
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"
}

btn.addEventListener("click", ()=>{
    const input = document.querySelector(".inp").value;
   if(input === ""){
    alert("Input any city")
    console.log("===========");
   }
   else{
checkWeather(input);
   }

})
