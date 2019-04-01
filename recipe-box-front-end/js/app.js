import api from './utils/api/api-actions'
import events from './utils/events/event-actions'
import Categories from './components/Categories'
import Category from './components/Category'
import Recipes from './components/Recipes'
import Ingredients from './components/Ingredients'
import Recipe from './components/recipe';

main()

function main() {

  api.getRequest('http://localhost:8080/categories', categories => {
      getAppContext().innerHTML = Categories(categories)
  })

  events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('category-image')) {
      api.getRequest((`http://localhost:8080/categories/${event.target.id}`), category => {
        getAppContext().innerHTML = Category(category)
      })
    }
  })

  events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('recipe-image')) {
      api.getRequest((`http://localhost:8080/recipes/${event.target.id}`), recipe => {
        getAppContext().innerHTML = Recipe(recipe)
      })
    }
  })

  events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('js-add-recipe__submit')) {
        const recipeName = document.querySelector('.js-submit-recipe__recipeName').value
        const recipeImage = document.querySelector('.js-submit-recipe__recipeName').value
        const instructions = document.querySelector('.js-submit-recipe__instructions').value

        api.postRequest(`http://localhost:8080/recipes/add/${event.target.id}`, {
            recipeName: recipeName,
            recipeImage: recipeImage,
            instructions: instructions
        }, category => getAppContext().innerHTML = Category(category))

    }

})

events.on(getAppContext(), 'click', () => {
  if (event.target.classList.contains('js-add-ingredient__submit')) {
      const measurement = document.querySelector('.js-submit-ingredient__measurement').value
      const ingredientName = document.querySelector('.js-submit-ingredient__ingredientName').value

      api.postRequest(`http://localhost:8080/ingredients/add/${event.target.id}`, {
          measurement: measurement,
          ingredientName: ingredientName
      }, recipe => getAppContext().innerHTML = Recipe(recipe))

  }

})

events.on(getAppContext(), 'click', () => {
  if (event.target.classList.contains('js-update-recipe')) {

    api.putRequest(`http://localhost:8080/recipes/update/${event.target.id}`, {
    }, category => getAppContext().innerHTML = Category(category))
  }
})

events.on(getAppContext(), 'click', () => {
  if (event.target.classList.contains('js-delete-recipe__submit')) {

    api.postRequest(`http://localhost:8080/recipes/delete/${event.target.id}`, {
    }, category => getAppContext().innerHTML = Category(category))
  }
})

}


function getAppContext() {
  return document.querySelector("#app");
}