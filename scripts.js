let clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

updateTime()

function updateTime() {
    // Setup the variables
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let ct = new Date();
    let hours = ct.getHours();
    let minutes = ct.getMinutes();
    let seconds = ct.getSeconds();
    let timeOfDay = hours < 12 ? 'AM' : 'PM'
    let year = ct.getFullYear();
    let month = ct.getMonth();
    let day = ct.getDate();
    let dayOfWeek = week[ct.getDay()];

    // Change to 12 hour format and prepare for when a zero is called
    hours = hours % 12;
    hours = hours ? hours : 12;

    // If numbers are less that 10 add a zero to the front of the number
    hours = zeroPadding(hours, 2);
    minutes = zeroPadding(minutes, 2);
    seconds = zeroPadding(seconds, 2);

    year = zeroPadding(year, 4);
    month = zeroPadding(month + 1, 2);
    day = zeroPadding(day, 2);

    clock.time = `${hours}:${minutes}:${seconds} ${timeOfDay}`
    clock.date = `${year}-${month}-${day} ${dayOfWeek}`
}

setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}