// var apiKey = "ddc5bf55d47a481586f8f6a808808cad";
var apiKey = "ddc5bf55d47a481586f8f6a808808cad";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var fullRecipe;  
var recipes = [];


var recipeResultsContainer = document.querySelector("#recipe-results");
var ingredientContainer = document.querySelector("#ingredient-items");
var expandedRecipeContainer = document.querySelector("#recipe-expanded");
var ingredientInputs = [];


var displayIngredients = function(ingredientInputEl) {

    var ingredientInputEl = document.getElementById("ingredient-input").value
    
    // console.log(ingredientInputEl);
    ingredientInputs.push(ingredientInputEl);
    // console.log(ingredientInputs);

    var cardDivEl = document.createElement("div");
    cardDivEl.className = "card";
    var cardContentDivEl = document.createElement("div");
    cardContentDivEl.className = "card-content my-1";
    var contentDivEl = document.createElement("div");
    contentDivEl.className = "content";
    contentDivEl.textContent = ingredientInputEl;

    cardContentDivEl.appendChild(contentDivEl);
    cardDivEl.appendChild(cardContentDivEl);
    ingredientContainer.appendChild(cardDivEl);
    
    
};

var expandRecipe = function() {
    clearElement;
    var recipeId = this.id;
    var expandedIngredients = [];
    //var ingredients1 = [recipes[i].missedIngredients]

    // for ( i = 0; i < recipes[i].missedIngredients.length; i++) {
    //     expandedIngredients.push(recipes[i].missedIngredients)
    //     console.log(expandedIngredients);
    // }

    


    var instructionApiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    // var ingredientUrl = `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${apiKey}`
    // var ingredientWidgetUrl = `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget?apiKey=${apiKey}`
    // console.log(ingredientWidgetUrl)

    
    //console.log(instructionApiUrl);
    //call the information needed
    fetch(instructionApiUrl)
        .then(Response => Response.json())
        .then(data => {
            // console.log(data)
            fullRecipe = [data]
            console.log(fullRecipe);
        }).then(() => {
            var cardDivEl = document.createElement("div");
            cardDivEl.className = "card";
            
            var cardContentDivEl = document.createElement("div");
            cardContentDivEl.className = "card-content";
            
            var headerEl = document.createElement("h8");
            headerEl.className = "title", "is-3";
            headerEl.textContent = fullRecipe[0].title;

            // ingredient
            // var ingredientContainerEl = document.createElement("ul");
            // for (let i = 0; i < expandedIngredients.length; i++) {
            //     var ingredientEl = document.createElement("li");
            //     ingredientEl.textContent = expandedIngredients[i];
            // }

            var instructionsEl = document.createElement("p");
            instructionsEl.className = "content";
            instructionsEl.textContent = `Instructions: \n ${fullRecipe[0].instructions}`;

            var urlEL = document.createElement("a");
            urlEL.setAttribute("href", fullRecipe[0].sourceUrl);
            urlEL.textContent = "Full Recipe: Here"

            
            cardContentDivEl.appendChild(headerEl);
            // ingredientContainerEl.appendChild(ingredientEl);
            // cardContentDivEl.appendChild(ingredientContainerEl);
            cardContentDivEl.appendChild(instructionsEl);
            cardContentDivEl.appendChild(urlEL);
            cardDivEl.appendChild(cardContentDivEl);
            expandedRecipeContainer.appendChild(cardDivEl);
        })
    // format the info into the card
    var cardDivEl = document.createElement("div");
    cardDivEl.className = "card";
    var cardContentDivEl = document.createElement("div");
    cardContentDivEl.className = "card-content my-1";
    var instructionsEl = document.createElement("p");
    var headerEl = document.createElement("h6");
    headerEl.className = "title", "is-3";
    headerEl.textContent = placeholder;
    instructionsEl.className = "content";
    instructionsEl.textContent = expandedRecipe; //instructions

    cardContentDivEl.appendChild(headerEl);
    cardContentDivEl.appendChild(instructionsEl);
    cardDivEl.appendChild(cardContentDivEl);
    expandedRecipeContainer.appendChild(cardDivEl);

      // fetch(apiUrl)
        // .then(Response => Response.json())
        // .then(resp => {
        //     console.log(resp)
        // })  => is an annonymous function, instead of function()

    // Calls the information in another way
        // async function recipes() {
        //     const response = await fetch(apiUrl);
        //     const resp = await response.json();
        //     console.log(resp.name);
        // }
    
}

var clearElement = function(element){
    element.innerHTML = "";
}


var displayRecipeSummaries = function() {

    var recipeApiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientInputs}`
    
    
    //Pull Title from API
    fetch(recipeApiUrl)
        .then(Response => Response.json())
        .then(data => {
            //console.log(data[0].title);
            for (let i = 0; i < data.length; i++) {
                recipes.push(data[i]);
            }
        }).then(() => {
            for (i = 0; i < recipes.length; i++) {
                var cardDivEl = document.createElement("div");
                cardDivEl.className = "card my-1";
                var cardContentDivEl = document.createElement("div");
                cardContentDivEl.className = "card-content";
                var contentDivEl = document.createElement("a");
                contentDivEl.className = "content";
                contentDivEl.setAttribute("id", recipes[i].id)
                contentDivEl.textContent = recipes[i].title;  //change to API info using notes down below
                
        
                cardContentDivEl.appendChild(contentDivEl);
                cardDivEl.appendChild(cardContentDivEl);
                recipeResultsContainer.appendChild(cardDivEl);
                contentDivEl.addEventListener("click", expandRecipe);
            }
            
        })
        // console.log(recipes);
    
    
    
    
    
}

getRecipeBtn.addEventListener("click", displayRecipeSummaries);
addItemsBtn.addEventListener("click", displayIngredients);
