/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=3c9639b2d937cc613e77cf142beccbe4'
const baseURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='

// Event listener to add function to existing HTML DOM element
let generate = document.getElementById('generate').addEventListener('click', (e) => {
    const zipcode = document.getElementById('zip').value;
    const content = document.getElementById('content').value;
    getWeatherData(`${baseURL}${zipcode}${apiKey}`)
        .then(function (data) {
            postData('/add', {
                temp: data.main.temp,
                date: newDate,
                content: content
            }).then(updateUI);
        })
});


/* Function to GET Web API Data*/
const getWeatherData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8000/',
        },
        credentials: 'same-origin', // include, *same-origin, omit
    });

    try {
        const data = await response.json();
        console.log(data);

        console.log(data.main.temp);
        // data.weather[0].main

        return data; // json response
        // we can now do smth with returned data here

    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    } catch (error) {
        console.log('error', error);
    }
}