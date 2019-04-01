package org.wecancodeit.recipebox.models;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.recipebox.models.Category;
import org.wecancodeit.recipebox.models.Ingredient;
import org.wecancodeit.recipebox.models.Recipe;

public class RecipeTest {
	Category test = new Category("TestCategory", "");
	Recipe recipeTest = new Recipe("Some recipe", "instructions", test, "");
	Ingredient ingredientTest = new Ingredient("1", "ingredient");
	Ingredient ingredientTest2 = new Ingredient("2", "ingredient2");
	
	@Test
	public void shouldAddIngredient() {
		recipeTest.addIngredient(ingredientTest);
		int length = recipeTest.getIngredients().size();
		assertEquals(length, 1);
	}
	
	@Test
	public void shouldRemoveAllIngredients() {
		recipeTest.addIngredient(ingredientTest);
		recipeTest.addIngredient(ingredientTest2);
		recipeTest.removeIngredientsInCollection();
		int length = recipeTest.getIngredients().size();
		assertEquals(length, 0);
	}
}