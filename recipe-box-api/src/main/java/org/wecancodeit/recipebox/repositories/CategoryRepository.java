package org.wecancodeit.recipebox.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.recipebox.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{

}
