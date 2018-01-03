package ru.gurv.vg.sample.operation.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import ru.gurv.vg.sample.operation.domain.Operation;
import ru.gurv.vg.sample.operation.projection.OperationExcerpt;

import java.util.Date;

@Repository
@RepositoryRestResource(
        itemResourceRel="operation",
        collectionResourceRel = "operation",
        path = "operation",
        excerptProjection = OperationExcerpt.class)
public interface OperationRepository extends PagingAndSortingRepository<Operation, Long> {

    @Query("SELECT COUNT(o) FROM Operation o WHERE o.ts <= :ts")
    Long countByTimestampLessThanEqual(@Param("ts") Date timestamp);

}
