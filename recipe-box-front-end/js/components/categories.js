function renderCategories(categories) {
  return `
  <div>
  <ul class="categories">
  ${categories.map(category => {
          return `

                      <li class="category">
                          <h5 class="category-name">${category.category}</h5> 
                          <img class="category-image id="${category.id}" src="${category.categoryImage}" />                       
                      </li>
                      
                  `;
      })
      .join("")}
      </ul>
      </div>
      `;
}