

var apiKey = "ddc5bf55d47a481586f8f6a808808cad";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var fullRecipe = document.querySelector("#full-recipe");

var recipeResultsContainer = document.querySelector("#recipe-results");

var ingredientInputs = [];

var cardDivEl = document.createElement("div")
var cardContentDivEl = document.createElement("div")
var contentDivEl = document.createElement("div")

var recipeSummaryBtns = [];

var recipeIds = [];


// changed name from 'displayIngredients' to 'ingredientInputHandler'
var ingredientInputHandler = function(ingredientInputEl) {

    // get ingredients to the array to be used
    // 
    var ingredientInputEl = document.getElementById("ingredient-input").value
    
    ingredientInputs.push(ingredientInputEl);
    console.log(ingredientInputs);

    // moved fetch(api) stuff to getRecipes below
}

/* var getRecipes = function(displayFunction) {
    // take ingredient array and convert it to single string
    ingredientInputs.toString();

    // make apiUrl that adds the single string ingredient variable
    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=" + ingredientInputs;
    
    // fetch api and json the response
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    // call the displayRecipeSummaries w/ data array
                    .then(function(data) {
                        displayFunction(data);
                    })
                
            } else (
                alert("Didn't work!")
            );
        }
        )    
}
*/

var getRecipes = function() {
    // take ingredient array and convert it to single string
    ingredientInputs.toString();

    // make apiUrl that adds the single string ingredient variable
    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=ddc5bf55d47a481586f8f6a808808cad&ingredients=" + ingredientInputs;
    
    // fetch api and json the response
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    // call the displayRecipeSummaries w/ data array
                    .then(function(data) {
                        displayRecipeSummaries(data);
                    })
                
            } else (
                alert("Didn't work!")
            );
        }
        )
}




var displayRecipeSummaries = function(recipeSummariesArray) {
    // change recipeSummaries to parameter that be response data object when called
    for (i = 0; i < recipeSummariesArray.length; i++) {
        // added 'summary-card' to the class so that the summary cards could be picked out separately from the other cards
        cardDivEl.className = "card summary-card";
        cardDivEl.setAttribute("id", recipeSummariesArray[i].id)
        cardContentDivEl.className = "card-content";
        contentDivEl.className = "content";

        var recipeTitleBtn = document.createElement("button");


        var h2Tag = document.createElement("h2");
        h2Tag.textContent = recipeSummariesArray[i].title;
        recipeTitleBtn.appendChild(h2Tag);
        recipeTitleBtn.addEventListener("click", function(){

            //create elements for title, image, recipe

            // give text content
                //including for loop for ingredient ul/li
            //setAttribute src for image
            //append to fullRecipe


        })

        // contentDivEl.textContent = recipeSummariesArray[i].title;
        contentDivEl.append(recipeTitleBtn);
        cardContentDivEl.appendChild(contentDivEl);
        // cardContentDivEl.appendChild(imgTag);
        cardDivEl.appendChild(cardContentDivEl);
        recipeResultsContainer.appendChild(cardDivEl);

        var recipeSummaryBtn = document.querySelector(".summary-card");
        recipeSummaryBtns.push(recipeSummaryBtn);

    }
}

var displayChosenRecipe = function(event) {
    // console.log(event);
    // title
    // ingredients
    // directions
}

getRecipeBtn.addEventListener("click", function() {
    getRecipes(displayRecipeSummaries)});
addItemsBtn.addEventListener("click", ingredientInputHandler);


