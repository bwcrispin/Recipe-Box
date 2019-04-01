package org.wecancodeit.recipebox.repositories;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.recipebox.models.Ingredient;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class IngredientRepoTest {
	@Resource
	private TestEntityManager entityManager;
	 
	@Resource 
	private IngredientRepository ingredientRepo;

	@Test
	public void shouldSaveAndLoadIngredient() {
		
		Ingredient ingredient = ingredientRepo.save(new Ingredient("test", "test"));
	 
	    entityManager.persist(ingredient);
	    entityManager.flush(); 
	    entityManager.clear();
	    
	    Ingredient ingredientFromDatabase = ingredientRepo.findByIngredientName("test");
	 
	    assertThat(ingredientFromDatabase.getIngredientName(), is("test"));
	}
}