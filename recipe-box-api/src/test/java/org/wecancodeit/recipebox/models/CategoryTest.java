package org.wecancodeit.recipebox.models;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.recipebox.models.Category;
import org.wecancodeit.recipebox.models.Recipe;

public class CategoryTest {
	
	Category test = new Category("TestCategory", "");
	Recipe recipeTest = new Recipe("Some recipe", "instructions", test, "");
	
	@Test
	public void shouldAddRecipe() {
		test.addRecipe(recipeTest);
		int length = test.getRecipes().size();
		assertEquals(length, 1);
	}
	
	@Test
	public void shouldRemoveRecipe() {
		test.addRecipe(recipeTest);
		test.removeRecipe(recipeTest);
		int length = test.getRecipes().size();
		assertEquals(length, 0);
	}
}
