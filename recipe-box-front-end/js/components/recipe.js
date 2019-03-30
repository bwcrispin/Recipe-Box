import Ingredients from './ingredients'

export default function Recipe(recipe) {
  return `
    <img src="${recipe.recipeImage}" alt="app image"/>
    <h2>${recipe.recipeName}</h2>   
    <ul>
      <li>${Ingredients(recipe.ingredients)}</li>
    </ul>
  `

}