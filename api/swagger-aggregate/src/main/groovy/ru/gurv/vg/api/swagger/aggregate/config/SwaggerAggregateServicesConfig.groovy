package ru.gurv.vg.api.swagger.aggregate.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Configuration

import java.util.List;

@Configuration
@ConfigurationProperties(prefix="documentation.swagger")
class SwaggerAggregateServicesConfig {

    List<SwaggerService> services;

    static class SwaggerService {
        String name
        String url
        String version
    }
}