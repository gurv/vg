package ru.gurv.vg.metadata.domain;

import javax.persistence.Id;

/**
 * Атрибут
 */
@javax.persistence.Entity
public class Attribute {

    @Id
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}