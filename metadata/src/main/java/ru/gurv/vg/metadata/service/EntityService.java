package ru.gurv.vg.metadata.service;

import ru.gurv.vg.metadata.domain.Entity;

public interface EntityService {

	/**
	 * Поиск по коду
	 *
	 * @param entityCode код сущности
	 * @return найденная сущность
	 */
	Entity findByCode(String entityCode);

}
