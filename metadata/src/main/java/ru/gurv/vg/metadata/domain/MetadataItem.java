package ru.gurv.vg.metadata.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * Элемент модели данных
 */
@MappedSuperclass
public class MetadataItem {

    @Id
    @GeneratedValue
    long id;

    @Column
    private String code;

}