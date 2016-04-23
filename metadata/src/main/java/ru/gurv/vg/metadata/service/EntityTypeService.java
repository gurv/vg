package ru.gurv.vg.metadata.service;

import ru.gurv.vg.metadata.domain.EntityType;

public interface EntityTypeService {

	/**
	 * Поиск по коду
	 *
	 * @param entityTypeCode
	 * @return найденный тип сущности
	 */
	EntityType findByCode(String entityTypeCode);
}
