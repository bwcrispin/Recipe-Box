package org.wecancodeit.recipebox;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.recipebox.models.Category;
import org.wecancodeit.recipebox.models.Ingredient;
import org.wecancodeit.recipebox.models.Recipe;
import org.wecancodeit.recipebox.repositories.CategoryRepository;
import org.wecancodeit.recipebox.repositories.IngredientRepository;
import org.wecancodeit.recipebox.repositories.RecipeRepository;

@Service
public class Initializer implements CommandLineRunner{

	@Resource
	CategoryRepository categoryRepo;
	
	@Resource
	RecipeRepository recipeRepo;
	
	@Resource
	IngredientRepository ingredientRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		Category category1 = categoryRepo.save(new Category("Salads"));
		Category category2 = categoryRepo.save(new Category("Soups"));
		Category category3 = categoryRepo.save(new Category("Side Dishes"));
		Category category4 = categoryRepo.save(new Category("Entrees"));
		Category category5 = categoryRepo.save(new Category("Appetizers"));
		
		Recipe recipe1 = recipeRepo.save(new Recipe("Hard-Boiled Eggs", "Boil water, add eggs.", category5 ));
		Recipe recipe2 = recipeRepo.save(new Recipe("Baked Potatoes", "Bake the potato.", category3 ));
		
		Ingredient ingredient1 = ingredientRepo.save(new Ingredient("1", "egg", recipe1));
		Ingredient ingredient2 = ingredientRepo.save(new Ingredient("1", "potato", recipe2));
		
		category5.addRecipe(recipe1);
		category3.addRecipe(recipe2);
		
		categoryRepo.save(category5);
		categoryRepo.save(category3);
		
		recipe1.addIngredient(ingredient1);
		recipe2.addIngredient(ingredient2);
		
		recipeRepo.save(recipe1);
		recipeRepo.save(recipe2);
	}

}
