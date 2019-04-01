export default function Recipes(recipes) {
    return `
    <div>
    <ul class="recipes">
    ${recipes.map(recipe => {
          return `
                      <li class="recipe">
                          <h5 class="recipe-name">${recipe.recipeName}</h5> 
                          <img class="recipe-image" id="${recipe.id}" src="${recipe.recipeImage}" />                       
                      </li>
                      
      <section class="delete">
        <h3>Delete this recipe?</h3>
        <button class="js-delete-recipe__submit" id="${recipe.id}">Delete Recipe</button>
      </section>
                  `;
      })
      .join("")}
      </ul>
      </div>



      `;
}