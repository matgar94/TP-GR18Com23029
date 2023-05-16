  fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/7894?apikey=DWJjhc7Kj0IxYGOnZOVT8jVmuSwV97G6&metric=true', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
    
})
.then(function (response) {
    console.log(JSON.stringify(response))
    return response.json();  
  })

   .then(response => console.log(JSON.stringify(response)))
   