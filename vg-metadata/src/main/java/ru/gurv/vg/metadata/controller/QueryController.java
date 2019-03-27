package ru.gurv.vg.metadata.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.gurv.vg.metadata.domain.EntityType;
import ru.gurv.vg.metadata.projection.EntityTypeProjection;
import ru.gurv.vg.metadata.repository.EntityRepository;

@RestController
@Scope("singleton")
@CrossOrigin(origins = "http://localhost:4200")
public class QueryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QueryController.class);

    @Autowired
    private ProjectionFactory projectionFactory;

    @Autowired
    private EntityRepository entityRepository;

    @Autowired
    private PagedResourcesAssembler<EntityTypeProjection> assembler;

    @RequestMapping(value="/entities", method = RequestMethod.GET, produces = "application/hal+json")
    public ResponseEntity<?> getEntities(Pageable pageable) {
        LOGGER.info("QueryController...");
        Page<EntityType> entityTypes = entityRepository.findAll(pageable);
        Page<EntityTypeProjection> projected = entityTypes
                .map(l -> projectionFactory.createProjection(EntityTypeProjection.class, l));
        PagedResources<Resource<EntityTypeProjection>> resources = assembler.toResource(projected);
        return ResponseEntity.ok(resources);
    }
}