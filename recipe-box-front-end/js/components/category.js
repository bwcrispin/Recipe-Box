export default function listCategories(categories) {
  return (categories.map(category => {
      return `
        <ul>
          <li></li>
        </ul>
      <option value=${category.id}>${category.category}</option>    
      `
  })
  .join(""));
}