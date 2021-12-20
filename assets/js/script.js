// var apiKey = "0195b7fd3cb14afbaa629e0c06b3d5b8";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var recipeSummaries = ["chicken parmesan", "pancakes", "chicken strips", "mac 'n cheese"];  
var placeholder = ["it worked!!"]

var recipeResultsContainer = document.querySelector("#recipe-results");
var ingredientContainer = document.querySelector("#ingredient-items");
var expandedRecipeContainer = document.querySelector("#recipe-expanded");
var ingredientInputs = [];


var displayIngredients = function(ingredientInputEl) {

    var ingredientInputEl = document.getElementById("ingredient-input").value
    // const lastItem = ingredientInputs[ingredientInputs.length - 1]
    console.log(ingredientInputEl);
    ingredientInputs.push(ingredientInputEl);
    console.log(ingredientInputs);

    var cardDivEl = document.createElement("div");
    cardDivEl.className = "card";
    var cardContentDivEl = document.createElement("div");
    cardContentDivEl.className = "card-content";
    var contentDivEl = document.createElement("div");
    contentDivEl.className = "content";
    contentDivEl.textContent = ingredientInputEl;

    cardContentDivEl.appendChild(contentDivEl);
    cardDivEl.appendChild(cardContentDivEl);
    ingredientContainer.appendChild(cardDivEl);
    
    
};


var expandRecipe = function() {
    //make the information a string
    //call the information needed
    // format the info into the card
    var cardDivEl = document.createElement("div");
    cardDivEl.className = "card";
    var cardContentDivEl = document.createElement("div");
    cardContentDivEl.className = "card-content";
    var contentDivEl = document.createElement("div");
    contentDivEl.className = "content";
    contentDivEl.textContent = placeholder;

    cardContentDivEl.appendChild(contentDivEl);
    cardDivEl.appendChild(cardContentDivEl);
    expandedRecipeContainer.appendChild(cardDivEl);
    // add the expanded recipe to the localStorage for easy access
}

var clearElement = function(element){
    element.innerHTML = "";
}


var displayRecipeSummaries = function() {

    var apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=${ingredient}' + ingredientInputs;
    
    
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                
            } else (
                alert("Didn't work!")
            );
        }
        ).then(resp => {
            console.log(resp)
        })

    
    
    for (i = 0; i < recipeSummaries.length; i++) {
        var cardDivEl = document.createElement("div");
        cardDivEl.className = "card";
        var cardContentDivEl = document.createElement("div");
        cardContentDivEl.className = "card-content";
        var contentDivEl = document.createElement("div");
        contentDivEl.className = "content";
        contentDivEl.textContent = recipeSummaries[i];  //change to API info using notes down below
        

        cardContentDivEl.appendChild(contentDivEl);
        cardDivEl.appendChild(cardContentDivEl);
        recipeResultsContainer.appendChild(cardDivEl);
        
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
    
    contentDivEl.addEventListener("click", expandRecipe);
}

getRecipeBtn.addEventListener("click", displayRecipeSummaries);
addItemsBtn.addEventListener("click", displayIngredients);


