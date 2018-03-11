package ru.gurv.vg.api.swagger.aggregate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
class SwaggerAggregateApplication {

    static void main(String[] args) {
        SpringApplication.run(SwaggerAggregateApplication.class, args);
    }

}
