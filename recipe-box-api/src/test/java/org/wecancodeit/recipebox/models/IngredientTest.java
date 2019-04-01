package org.wecancodeit.recipebox.models;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.recipebox.models.Category;
import org.wecancodeit.recipebox.models.Ingredient;
import org.wecancodeit.recipebox.models.Recipe;

public class IngredientTest {
	
	Category test = new Category("TestCategory", "");
	Recipe recipeTest = new Recipe("Some recipe", "instructions", test, "");
	Recipe recipeTest2 = new Recipe("Some recipe", "instructions", test, "");
	Ingredient ingredientTest = new Ingredient("1", "ingredient");
	Ingredient ingredientTest2 = new Ingredient("2", "ingredient2");
	
	
	@Test
	public void shouldAddRecipeIngredient() {
		ingredientTest.addRecipeToIngredient(recipeTest);
		int length = ingredientTest.getRecipe().size();
		assertEquals(length, 1);
	}
	
	@Test
	public void shouldRemoveRecipeFromIngredients() {
		ingredientTest.addRecipeToIngredient(recipeTest);
		ingredientTest.addRecipeToIngredient(recipeTest2);
		ingredientTest.removeRecipeFromIngredient(recipeTest);	
		int length = ingredientTest.getRecipe().size();
		assertEquals(length, 1);
	}
}
