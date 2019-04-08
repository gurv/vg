package ru.gurv.vg.metadata.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

/**
 * Атрибут
 */
@Entity
@Getter
@RequiredArgsConstructor
@EqualsAndHashCode(of = "id")
public class Attribute {

    @Id
    @GeneratedValue
    private Long id;

    private String code;

    String name;

    @ManyToOne
    EntityType entityType;

    @Enumerated(EnumType.STRING)
    AttributeType attributeType;
}