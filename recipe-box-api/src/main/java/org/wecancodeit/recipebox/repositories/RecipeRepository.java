package org.wecancodeit.recipebox.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.recipebox.models.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long>{


	Recipe findByRecipeName(String string);

}
