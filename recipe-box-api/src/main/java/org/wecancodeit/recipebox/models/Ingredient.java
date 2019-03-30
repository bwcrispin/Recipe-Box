package org.wecancodeit.recipebox.models;

import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Ingredient {

	@Id
	@GeneratedValue
	private Long id;
	private String measurement;
	private String ingredientName;
	
	@ManyToMany
	@JsonIgnore
	private Collection<Recipe> recipes;

	public Ingredient() {}
	
	public Ingredient(String measurement, String ingredientName, Recipe ...recipes) {
		this.measurement = measurement;
		this.ingredientName = ingredientName;
		this.recipes = Arrays.asList(recipes);
	}

	public Long getId() {
		return id;
	}

	public String getMeasurement() {
		return measurement;
	}

	public String getIngredientName() {
		return ingredientName;
	}

	public Collection<Recipe> getRecipe() {
		return recipes;
	}
	
	
}
