package org.wecancodeit.recipebox.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Category {

	@Id
	@GeneratedValue
	private Long id;
	private String category;
	@Lob
	private String categoryImage;
	
	@OneToMany
	private Collection<Recipe> recipes;

	public Category() {}
	
	public Category(String category, String categoryImage) {
		this.category = category;
		this.categoryImage = categoryImage;
		this.recipes = new ArrayList<Recipe>();
	}

	public Long getId() {
		return id;
	}

	public String getCategory() {
		return category;
	}
	
	public Collection<Recipe> getRecipes() {
		return recipes;
	}
	
	public String getCategoryImage() {
		return categoryImage;
	}
	
	public void addRecipe(Recipe recipe) {
		recipes.add(recipe);
	}
	
	@Override
	public String toString() {
		return "Categories [id=" + id + ", category=" + category + "]";
	}
	
	
	
	
}
