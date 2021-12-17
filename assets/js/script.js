// var apiKey = "0195b7fd3cb14afbaa629e0c06b3d5b8";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var recipeSummaries = ["chicken parmesan", "pancakes", "chicken strips", "mac 'n cheese"];

var recipeResultsContainer = document.querySelector("#recipe-results");



var displayIngredients = function(ingredientInputEl) {
    var ingredientInputEl = document.getElementById("ingredient-input").value
    
    var ingredientInputs = [];
    ingredientInputs.push(ingredientInputEl);
    console.log(ingredientInputs);

    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=" + ingredientInputs;

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                
            } else (
                alert("Didn't work!")
            );
        }
        )
}





var displayRecipeSummaries = function() {
    for (i = 0; i < recipeSummaries.length; i++) {
        var cardDivEl = document.createElement("div")
        cardDivEl.className = "card";
        var cardContentDivEl = document.createElement("div")
        cardContentDivEl.className = "card-content";
        var contentDivEl = document.createElement("div")
        contentDivEl.className = "content";
        contentDivEl.textContent = recipeSummaries[i];

        cardContentDivEl.appendChild(contentDivEl);
        cardDivEl.appendChild(cardContentDivEl);
        recipeResultsContainer.appendChild(cardDivEl);
    }
}

getRecipeBtn.addEventListener("click", displayRecipeSummaries);
addItemsBtn.addEventListener("click", displayIngredients);
