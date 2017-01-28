package ru.gurv.vg.metadata.domain;

/**
 * Примитивный тип
 */
public class PrimitiveType extends MetadataType {

    /**
     * Вид
     */
    private PrimitiveTypeKind primitiveTypeKind;

    public PrimitiveTypeKind getPrimitiveTypeKind() {
        return primitiveTypeKind;
    }

    public void setPrimitiveTypeKind(PrimitiveTypeKind primitiveTypeKind) {
        this.primitiveTypeKind = primitiveTypeKind;
    }

}