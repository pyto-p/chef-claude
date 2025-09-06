import { useState } from "react";
function Main() {
  const [ingredients, setIngredients] = useState([]);

  const submit = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  };

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          className="input-bar"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="input-btn">+ Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          <div className="get-recipe-container">
            {ingredients.length > 3 ? (
              <>
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
              </>
            ) : (
              <p>
                You need {4 - ingredients.length} more ingredients to generate a
                recipe!
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default Main;
