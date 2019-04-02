let degree = "&deg;";
let fahUnit = "F";
let celUnit = "C";
let units = "imperial";
let searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", getWeather);
let tempButton = document.getElementById("tempunit");
tempButton.addEventListener("click", function() {
  if (tempButton.innerHTML === "F") {
    units = "metric";
    tempButton.innerHTML = celUnit;
    getWeather();
  } else if (tempButton.innerHTML === "C") {
    units = "imperial";
    tempButton.innerHTML = fahUnit;
    getWeather();
  }
});
let searchText = document.getElementById("search-txt");

function getWeather() {
  return fetch(
    // Chrome requires HTTPS connections but openweather api, the free version, comes through as HTTP
    // added 'https://crossorigin.me/ to the api call to fix.
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${
      searchText.value
    }&units=${units}&appid=3c9639b2d937cc613e77cf142beccbe4`
  )
    .then(response => response.json())
    .then(function(data) {
      // Begin accessing JSON data here
      let location = data.name + ", " + data.sys.country;
      document.getElementById("location").innerHTML = location;
      let temp = data.main.temp + degree;
      document.getElementById("temp").innerHTML = temp;
      let main = data.weather[0].main;
      document.getElementById("main").innerHTML = main;
      console.log(temp);
    })
    .catch(error => console.error(`Error: ${error}`));
}
