package ru.gurv.vg.sample.operation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;

@SpringBootApplication
@EnableBinding
public class OperationSampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(OperationSampleApplication.class, args);
    }

}
