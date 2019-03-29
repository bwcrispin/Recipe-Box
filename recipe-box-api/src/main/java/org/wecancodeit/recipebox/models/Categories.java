package org.wecancodeit.recipebox.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Categories {

	@Id
	@GeneratedValue
	private Long id;
	
	private String category;
	
	@OneToMany
	private Collection<Recipe> recipes;

	public Categories() {}
	
	public Categories(String category) {
		this.category = category;
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
	
	@Override
	public String toString() {
		return "Categories [id=" + id + ", category=" + category + "]";
	}
	
	
	
	
}
