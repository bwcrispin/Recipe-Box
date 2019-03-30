package org.wecancodeit.recipebox.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.recipebox.models.Recipe;
import org.wecancodeit.recipebox.repositories.CategoryRepository;
import org.wecancodeit.recipebox.repositories.IngredientRepository;
import org.wecancodeit.recipebox.repositories.RecipeRepository;

@CrossOrigin
@RestController
@RequestMapping("/recipes")
public class RecipeController {
	
	@Resource
	CategoryRepository categoryRepo;
	
	@Resource
	RecipeRepository recipeRepo;
	
	@Resource
	IngredientRepository ingredientRepo;
	
	@GetMapping("")
	public Collection<Recipe> getAllRecipes() {
		return (Collection<Recipe>) recipeRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Recipe getRecipe(@PathVariable Long id) {
		return recipeRepo.findById(id).get();
	}

}
