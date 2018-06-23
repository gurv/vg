package ru.gurv.vg.metadata.domain;

import javax.persistence.Id;

/**
 * Сущность
 */
@javax.persistence.Entity
public class Entity {

    @Id
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}