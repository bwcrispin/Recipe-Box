package org.wecancodeit.recipebox.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Recipe {

	
	@Id
	@GeneratedValue
	private Long id;
	private String recipeName;
	@Lob
	private String instructions;
	@Lob
	private String recipeImage;
	
	@OneToMany
	@JsonIgnore
	private Collection<Ingredient> ingredients;
	
	@ManyToOne 
	@JsonIgnore
	private Category category;
	
	public Recipe() {}

	public Recipe(String recipeName, String instructions, Category category, String recipeImage, Ingredient ...ingredients) {
		this.recipeName = recipeName;
		this.instructions = instructions;
		this.category = category;
		this.recipeImage = recipeImage;
		this.ingredients = new ArrayList<Ingredient>();
	}

	public Long getId() {
		return id;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public String getInstructions() {
		return instructions;
	}

	public Collection<Ingredient> getIngredients() {
		return ingredients;
	}
	
	public String getRecipeImage() {
		return recipeImage;
	}
	
	public void addIngredient(Ingredient ingredient) {
		ingredients.add(ingredient);
	}
	
	public Category getCategory() {
		return category;
	}
	
	
}
