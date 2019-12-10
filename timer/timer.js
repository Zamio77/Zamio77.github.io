let clock = document.getElementById('app');

let deadLine = 'December 31 2019 23:59:59 GMT+0200'


function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
    };

    function updateClock(){
        var t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
                          'hours: '+ t.hours + '<br>' +
                          'minutes: ' + t.minutes + '<br>' +
                          'seconds: ' + t.seconds;
        if(t.total<=0){
          clearInterval(timeinterval);
        }
      }
      
      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,1000);