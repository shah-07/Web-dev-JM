const searchLocation = () => {
  const searchField = document.getElementById('search-input')
  const searchText = searchField.value;
  const url = (`https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=3e4f45a2e9564ad5c5011b95491fff7d`)
  fetch(url)
    .then(res => res.json())
    .then(data => loadweather(data[0]));
}
const loadweather = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=3e4f45a2e9564ad5c5011b95491fff7d&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}

const displayWeather = (weatherInfo) => {
  const temp = weatherInfo.main.temp;
  const searchField = document.getElementById('search-input')
  const searchText = searchField.value;
  searchField.value = '';
  const weatherContainer = document.getElementById('weather');
  weatherContainer.textContent = '';
  const div = document.createElement('div');
  div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="">
    <h1>${searchText.toUpperCase()}</h1>
    <h3><span>${Math.round(temp)}</span>&deg;C</h3>
    <h1 class="lead">${weatherInfo.weather[0].main}</h1>
  `;
  weatherContainer.appendChild(div);
}