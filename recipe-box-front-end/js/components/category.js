import Recipes from './recipes'

export default function listCategories(category) {
      return `
        <h1>${category.categoryImage}</h1>
        <h2>${category.category}</h2>
        <ul>
          <li>${Recipes(category.recipes)}</li>
        </ul>    
      `
  .join("");
}