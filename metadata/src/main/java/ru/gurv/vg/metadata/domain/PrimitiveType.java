package ru.gurv.vg.metadata.domain;

public class PrimitiveType extends MetadataType {

    private PrimitiveTypeKind primitiveTypeKind;

    public PrimitiveTypeKind getPrimitiveTypeKind() {
        return primitiveTypeKind;
    }

    public void setPrimitiveTypeKind(PrimitiveTypeKind primitiveTypeKind) {
        this.primitiveTypeKind = primitiveTypeKind;
    }
}