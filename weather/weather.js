let degree = "&deg;";
let fahUnit = "F";
let celUnit = "C";
let units = "imperial";
let searchButton = document.getElementById("search-btn");
let tempButton = document.getElementById("tempunitbtn");
let searchText = document.getElementById("search-txt");
let icon_src = "";

function getWeather() {
  // Chrome requires HTTPS connections but openweather api, the free version, comes through as HTTP
  // added 'https://cors-anywhere.herokuapp.com/' to the api call to fix.
  const weatherApiZip = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${searchText.value}&units=${units}&appid=3c9639b2d937cc613e77cf142beccbe4`;
  const weatherApiCity = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&units=${units}&appid=3c9639b2d937cc613e77cf142beccbe4`;
  const weatherApiCall = isNaN(parseInt(searchText.value)) ? weatherApiCity : weatherApiZip;



  console.log(weatherApiCity);
  console.log(weatherApiZip);
  console.log(weatherApiCall);
  fetch(weatherApiCall)
    .then(response => response.json())
    .then(data => {
      // Begin accessing JSON data here
      let location = `${data.name}, ${data.sys.country}`;
      document.getElementById("location").innerHTML = location;
      let temp = data.main.temp + degree;
      document.getElementById("temp").innerHTML = temp;
      let main = data.weather[0].main;
      document.getElementById("main").innerHTML = main;
      console.log(temp);

      let weatherId = data.weather[0].id;
      console.log(weatherId);
      weatherIcon(weatherId);
    })
    .catch(error => console.error(`Error: ${error}`));
}

// Set the actionlistener for the searchButton
searchButton.addEventListener("click", getWeather);

// Setup the TempButton
tempButton.addEventListener("click", () => {
  if (tempButton.innerHTML === "F") {
    units = "metric";
    tempButton.innerHTML = celUnit;
    getWeather();
  } // (tempButton.innerHTML === "C")
  else {
    units = "imperial";
    tempButton.innerHTML = fahUnit;
    getWeather();
  }
});

// Setup the weather icon function

function weatherIcon(weatherCondition) {
  switch (true) {
    case weatherCondition >= 200 && weatherCondition <= 232:
      icon_src = "./Icons/animated/thunder.svg";
      break;
    case weatherCondition >= 300 && weatherCondition <= 531:
      icon_src = "./Icons/animated/rainy-1.svg";
      break;
    case weatherCondition >= 600 && weatherCondition <= 622:
      icon_src = "./Icons/animated/snowy-1.svg";
      break;
    case weatherCondition === 800:
      icon_src = "./Icons/animated/day.svg";
      break;
    default:
      icon_src = "./Icons/animated/cloudy-day-1.svg";
  }

  let icon_element = document.getElementById("icon");
  icon_element.src = icon_src;
}