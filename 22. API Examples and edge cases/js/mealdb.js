//33-5 Explore meal db api and create dynamic url to load meals
const searchFood = async () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear data
  searchField.value = "";

  const MealDetails = document.getElementById('meal-details');
  if (searchText == '') {
    //warning message
    MealDetails.innerHTML = `
    <h4 class="text-warning">Please write something to display</h4>
  `;
  } else {
    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //async await
    const res = await fetch(url)
    const data = await res.json()
    displaySearchResult(data.meals)
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => displaySearchResult(data.meals));
    MealDetails.textContent = '';
  }
};

//33-6 Display dynamic search result using bootstrap cards
const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = '';

  const MealDetails = document.getElementById('meal-details');
  if (meals == null) {
    //warning message
    MealDetails.innerHTML = `
      <h4 class="text-danger">No results found</h4>
    `;
  } else {
    MealDetails.textContent = '';
  }
  meals.forEach((meal) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img onclick="loadMealDetails(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}.......</p>
        </div>
      </div>
    `;
    searchResult.appendChild(div);
  });

};



//33-7 Create dynamic url based on click and display data
const loadMealDetails = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  //async await
  const res = await fetch(url)
  const data = await res.json()
  displayMealDetails(data.meals[0])

  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) => {
  const MealDetails = document.getElementById('meal-details');
  MealDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card', 'mx-auto')
  div.style = "width: 20rem;"
  div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}.......</p>
      <a href="${meal.strYoutube}" target ="_blank" class="btn btn-primary">Go youtube</a>
    </div>
  `;
  MealDetails.appendChild(div);


}