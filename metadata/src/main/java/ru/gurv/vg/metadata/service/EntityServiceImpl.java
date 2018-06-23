package ru.gurv.vg.metadata.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import ru.gurv.vg.metadata.domain.Entity;
import ru.gurv.vg.metadata.repository.EntityRepository;

@Service
public class EntityServiceImpl implements EntityService {

	private EntityRepository repository;

    @Autowired
    public EntityServiceImpl(EntityRepository repository) {
        this.repository = repository;
    }

    @Override
	public Entity findByCode(String entityCode) {
		Assert.hasLength(entityCode, "must have length");
		return repository.findByCode(entityCode);
	}

}