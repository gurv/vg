package ru.gurv.vg.sample.operation;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import ru.gurv.vg.sample.operation.domain.Operation;
import ru.gurv.vg.sample.operation.repository.OperationRepository;

import java.util.stream.Stream;

@SpringBootApplication
public class OperationSampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(OperationSampleApplication.class, args);
    }

    //TODO убрать эту функциональность в пакет инициализации
    @Bean
    ApplicationRunner init(OperationRepository repository) {
        return args -> {
            Stream.iterate(0, i -> i + 1).limit(100).forEach(i -> {
                Operation operation = new Operation();
                repository.save(operation);
            });
        repository.findAll().forEach(System.out::println);
        };
    }

}
