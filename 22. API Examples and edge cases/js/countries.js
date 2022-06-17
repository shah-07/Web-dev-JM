//33-3 International Travel, Display countries name, capital
const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
      <h3>${element.name.common}</h3>
      <p>${element.capital}</p>
      <button onclick="loadCountryByName('${element.name.common}')">Details</button>
    `;
    // const h3 = document.createElement("h3");
    // h3.innerText = element.name.common;
    // div.appendChild(h3);
    // const p = document.createElement("p");
    // p.innerText = element.capital;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
  });
};

//33-4 (advanced) Call dynamic API, load dynamic data to display
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flags.svg}">
  `;
};
