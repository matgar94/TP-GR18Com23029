
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

.then(
    (result) => {
      //console.log("Result",JSON.stringify(result));
      //console.log(result.DailyForecasts[0].Date);
      //console.log(result.DailyForecasts[0].Temperature);
      obj = JSON.stringify(result.DailyForecasts[0].Temperature);
      //console.log(obj);
      const objet = JSON.parse(obj);
      console.log(objet);
      obj1 = JSON.stringify(objet.Maximum);
      console.log(objet.Maximum);
      const objet1 = JSON.parse(obj1);
      console.log(objet1.Value);
      console.log(objet1.Unit);
      document.getElementById("demo").innerHTML = objet1.Value;
    })


   