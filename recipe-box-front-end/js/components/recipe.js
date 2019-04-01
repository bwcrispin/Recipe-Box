import Ingredients from './ingredients'

export default function Recipe(recipe) {
  return `
  
    <img src="${recipe.recipeImage}" alt="app image"/>
    <h2>${recipe.recipeName}</h2>   
    <ul>
      <li>${Ingredients(recipe.ingredients)}</li>
      <li>${recipe.instructions}</li>
    </ul>

    <section class="submit">
      <h3>Add ingredients to this recipe!</h3>
      <input type="text" class="js-submit-ingredient__measurement" placeholder="Measurement"/>
      <input type="text" class="js-submit-ingredient__ingredientName" placeholder="Ingredient"/>
      <button class="js-add-ingredient__submit" id="${recipe.id}">Add Ingredient</button>
    </section>

    <section class="submit">
      <h3>Edit recipe instructions!</h3>
      <input type="text" class="js-edit-recipe__instructions" placeholder="New Instructions"/>
      <button class="js-update-instructions__submit" id="${recipe.id}">Make Changes</button>
  </section>

  `

}