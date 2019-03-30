import Recipes from './Recipes'

export default function Category(category) {
      return `
        <img src="${category.categoryImage}" alt="app image"/>
        <h2>${category.category}</h2>   
        <ul>
          <li>${Recipes(category.recipes)}</li>
        </ul>
      `

}