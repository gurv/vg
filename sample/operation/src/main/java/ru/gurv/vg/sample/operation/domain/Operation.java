package ru.gurv.vg.sample.operation.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Operation {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "OPERATION_ID_SEQ")
    @SequenceGenerator(name = "OPERATION_ID_SEQ", sequenceName = "OPERATION_ID_SEQ", allocationSize = 100)
	private long id;

    @Column(insertable = false, updatable = false)
	private Date ts;

    @Column(insertable = false)
    private Integer state;

    @Override
    public String toString() {
        return "Operation{" +
                "id=" + id +
                ", ts=" + ts +
                ", state=" + state +
                '}';
    }
}
