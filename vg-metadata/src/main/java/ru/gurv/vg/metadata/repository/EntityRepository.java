package ru.gurv.vg.metadata.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import ru.gurv.vg.metadata.domain.EntityType;

@Repository
public interface EntityRepository extends PagingAndSortingRepository<EntityType, String> {

	EntityType findByCode(String code);
}