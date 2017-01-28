package ru.gurv.vg.metadata.domain;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Тип сущности
 */
@Entity
public class EntityType extends MetadataType {

    @Column(name = "code")
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}