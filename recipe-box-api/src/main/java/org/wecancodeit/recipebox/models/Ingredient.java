package org.wecancodeit.recipebox.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Ingredient {

	@Id
	@GeneratedValue
	private Long id;
	
	private String measurement;
	private String ingredientName;
	
	@ManyToMany
	private Collection<Recipe> recipes;

	public Ingredient() {}
	
	public Ingredient(String measurement, String ingredientName) {
		this.measurement = measurement;
		this.ingredientName = ingredientName;
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

	public Collection<Recipe> getRecipes() {
		return recipes;
	}
	
	
}
