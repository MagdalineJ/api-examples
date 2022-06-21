document.getElementById('error').style.display="none";
// first function about searching food
const searchFood =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    searchField.value='';
  if (searchText == ''){
    // show please write soemthing to display
  }else{
    // load data
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res=> res.json())
    .then(json=> displaySearchResult(json.meals))
    .catch(error => displayError(error))

  }
    const displayError = error =>{
      document.getElementById('error').style.display="block";
    }
}
// 2nd function showing deatils of food search
const displaySearchResult = meals => {
    // console.log(meals)
    const searchResult = document.getElementById('search-result');
    // clear result
    // searchResult.innerHTML ='';.....(not recommended)
    searchResult.textContent='';
   
    
    //////////
meals.forEach(meal => {
 const div = document.createElement('div');
div.classList.add('col');
// look at the parameter of loadMEalDetail function
div.innerHTML =`
          <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}.....</p>
            </div>
          </div>
`;
searchResult.appendChild(div)

})
}
// 3rd function loading purticular meal detail when clicked
const loadMealDetail = mealId => {
    // console.log(mealId)
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try{
      fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]))
    }catch{
      document.getElementById('error').style.display="block";

    }
   
    // look how to enter into the main object via array and objects
}
// 4rth funciton displaying that particular meal detail
const displayMealDetail = meal => {
console.log(meal);
const mealDetails= document.getElementById('meal-details');
const div=document.createElement('div');
div.classList.add('card');
div.innerHTML= `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Let's watch video</a>
  </div>

`;
mealDetails.appendChild(div);
}

