package ru.gurv.vg.metadata.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gurv.vg.metadata.domain.EntityType;

@Repository
public interface EntityTypeRepository extends CrudRepository<EntityType, String> {

	EntityType findByCode(String code);

}
