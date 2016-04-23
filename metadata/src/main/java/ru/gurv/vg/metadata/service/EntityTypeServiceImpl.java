package ru.gurv.vg.metadata.service;

import ru.gurv.vg.metadata.domain.EntityType;
import ru.gurv.vg.metadata.repository.EntityTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

@Service
public class EntityTypeServiceImpl implements EntityTypeService {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private EntityTypeRepository repository;

	/**
	 * {@inheritDoc}
	 */
	@Override
	public EntityType findByCode(String entityTypeCode) {
		Assert.hasLength(entityTypeCode);
		return repository.findByCode(entityTypeCode);
	}
}
