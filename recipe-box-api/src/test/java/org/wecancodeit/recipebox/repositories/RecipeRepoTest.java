package org.wecancodeit.recipebox.repositories;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.recipebox.models.Category;
import org.wecancodeit.recipebox.models.Recipe;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class RecipeRepoTest {
	@Resource
	private TestEntityManager entityManager;
	 
	@Resource 
	private RecipeRepository recipeRepo;
	
	@Resource
	private CategoryRepository categoryRepo;

	@Test
	public void shouldSaveAndLoadRecipe() {
		Category category = categoryRepo.save(new Category("", ""));
		Recipe recipe = recipeRepo.save(new Recipe("test", "", category, ""));
	 
	    entityManager.persist(recipe);
	    entityManager.flush(); 
	    entityManager.clear();
	    
	    Recipe recipeFromDatabase = recipeRepo.findByRecipeName("test");
	 
	    assertThat(recipeFromDatabase.getRecipeName(), is("test"));
	}
}
