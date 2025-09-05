import { useState } from "react";
function Main() {

  const [ingredients, setIngredients] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    setIngredients(prev => [...prev, newIngredient])
  }

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="e.g. oregano" 
          className="input-bar" 
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="input-btn">+ Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  );
}

export default Main;
