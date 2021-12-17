// var apiKey = "0195b7fd3cb14afbaa629e0c06b3d5b8";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var recipeSummaries = ["chicken parmesan", "pancakes", "chicken strips", "mac 'n cheese"];

var recipeResultsContainer = document.querySelector("#recipe-results");
var ingredientContainer = document.querySelector("#ingredient-items");
var ingredientInputs = [];


var displayIngredients = function(ingredientInputEl) {
    var ingredientInputEl = document.getElementById("ingredient-input").value
    
    ingredientInputs.push(ingredientInputEl);
    console.log(ingredientInputs);
    if (ingredientInputs) {
        for (i = 0; i < ingredientInputs.length; i++) {
            var cardDivEl = document.createElement("div")
            cardDivEl.className = "card";
            var cardContentDivEl = document.createElement("div")
            cardContentDivEl.className = "card-content";
            var contentDivEl = document.createElement("div")
            contentDivEl.className = "content";
            contentDivEl.textContent = ingredientInputs[i];

            cardContentDivEl.appendChild(contentDivEl);
            cardDivEl.appendChild(cardContentDivEl);
            ingredientContainer.appendChild(cardDivEl);
        }} 
        else {
            alert("write something.")
        }

};







var displayRecipeSummaries = function() {

    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=" + ingredientInputs;

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                
            } else (
                alert("Didn't work!")
            );
        }
        );

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
