import Recipes from './Recipes'

export default function Category(category) {
  console.log(category)
      return `
        <img src="${category.categoryImage}" alt="app image"/>
        <h2>${category.category}</h2>   
        <ul>
          <li>${Recipes(category.recipes)}</li>
        </ul>


        <section class="submit">
          <h3>Add a new recipe to this category!</h3>
          <input type="text" class="js-submit-recipe__recipeName" placeholder="Recipe Name"/>
          <input type="text" class="js-submit-recipe__recipeImage" placeholder="Picture of the recipe"/>
          <input type="text" class="js-submit-recipe__instructions" placeholder="Recipe Instructions"/>
          <button class="js-add-recipe__submit" id="${category.id}">Add Recipe</button>
        </section>
      `

}