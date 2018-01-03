package ru.gurv.vg.sample.operation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.repository.Repository;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.gurv.vg.sample.operation.domain.Operation;
import ru.gurv.vg.sample.operation.projection.OperationExcerpt;
import ru.gurv.vg.sample.operation.repository.OperationRepository;

@RestController
public class OperationController {

    @Autowired
    private ProjectionFactory projectionFactory;

    @Autowired
    private OperationRepository operationRepository;

    @Autowired
    private PagedResourcesAssembler<OperationExcerpt> assembler;

    @GetMapping("/ping")
    String ping() {
        return "pong";
    }

    @RequestMapping(value="/operations", method = RequestMethod.GET, produces = "application/hal+json")
    public ResponseEntity<?> getOperations(Pageable pageable) {
        Page<Operation> operations = operationRepository.findAll(pageable);
        Page<OperationExcerpt> projected = operations
                .map(l -> projectionFactory.createProjection(OperationExcerpt.class, l));
        PagedResources<Resource<OperationExcerpt>> resources = assembler.toResource(projected);
        return ResponseEntity.ok(resources);
    }

    @RequestMapping(value = "/operations/operation")
    public Page<?> listOperations(Pageable pageable) {
        return operationRepository
                .findAll(pageable)
                .map(operation -> projectionFactory.createProjection(OperationExcerpt.class, operation));
    }
}
