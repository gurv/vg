package ru.gurv.vg.metadata.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.gurv.vg.metadata.domain.Entity;

@Repository
public interface EntityRepository extends CrudRepository<Entity, String> {

	Entity findByCode(String code);

}
