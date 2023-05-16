
fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/7894?apikey=DWJjhc7Kj0IxYGOnZOVT8jVmuSwV97G6&metric=true")
  .then((response) => response.json())
  .then((json) => console.log(json));