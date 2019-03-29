package org.wecancodeit.recipebox.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;


@Entity
public class Recipe {

	
	@Id
	@GeneratedValue
	private Long id;
	
	private String recipeName;
	
	@Lob
	private String instructions;
	
	@ManyToMany
	private Collection<Ingredient> ingredients;
	
	@ManyToOne
	private Category category;
	
	public Recipe() {}

	public Recipe(String recipeName, String instructions, Category category) {
		this.recipeName = recipeName;
		this.instructions = instructions;
		this.category = category;
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

	public Category getCategory() {
		return category;
	}
	
	
}
