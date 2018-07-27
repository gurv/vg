package ru.gurv.vg.metadata.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

/**
 * Сущность
 */
@Entity
@Data
@Builder
public class EntityType {

    @Id
    @GeneratedValue
    Long id;

    String code;

    String name;

    @OneToMany(mappedBy = "entityType")
    Set<Attribute> attributes;

    @ManyToOne
    Package entityPackage;
}