const apiKey = 'd9e459f8cf854a09a9d94616261101';
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=7`;

fetch(url)
  .then(res => res.json())
  .then(json => {
    // This is the array of 7 days
    const forecastArray = json.forecast.forecastday;

    // 1. .filter: Keep only days where max temperature is > 15°C
    const warmDays = forecastArray.filter(item => item.day.maxtemp_c > 15);

    // 2. .map: Create a new array with only the date and the weather condition text
    const summary = forecastArray.map(item => ({
      date: item.date,
      weather: item.day.condition.text,
      temp: item.day.avgtemp_c
    }));

    console.log("Warm Days Only:", warmDays);
    console.log("Weekly Summary:", summary);
  });