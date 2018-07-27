package ru.gurv.vg.metadata.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Пакет
 */
@Entity
@Getter
@RequiredArgsConstructor
@EqualsAndHashCode(of = "id")
public class Package {

    @Id
    @GeneratedValue
    private Long id;

    private String code;

    String name;

    @ManyToOne
    Package parentPackage;
}