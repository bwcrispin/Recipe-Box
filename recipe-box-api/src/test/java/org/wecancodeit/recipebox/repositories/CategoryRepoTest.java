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

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CategoryRepoTest {
	
		@Resource
		private TestEntityManager entityManager;
		 
		@Resource 
		private CategoryRepository categoryRepo;

		@Test
		public void shouldSaveAndLoadCategory() {
		    Category category = categoryRepo.save(new Category("test", ""));
		 
		    entityManager.persist(category);
		    entityManager.flush(); 
		    entityManager.clear();
		    
		    Category categoryFromDatabase = categoryRepo.findByCategory("test");
		 
		    assertThat(categoryFromDatabase.getCategory(), is("test"));
		}
}
