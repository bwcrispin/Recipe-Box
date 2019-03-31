package org.wecancodeit.recipebox.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.recipebox.models.Ingredient;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Long>{


}
