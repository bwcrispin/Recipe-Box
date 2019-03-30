import api from './utils/api/api-actions'
import events from './utils/events/event-actions'
import Categories from './components/Categories'
import Category from './components/Category'
import Recipes from './components/Recipes'
import Ingredients from './components/Ingredients'

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
}


function getAppContext() {
  return document.querySelector("#app");
}