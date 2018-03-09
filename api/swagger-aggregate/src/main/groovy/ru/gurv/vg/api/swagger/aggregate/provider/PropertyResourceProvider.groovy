package ru.gurv.vg.api.swagger.aggregate.provider

import ru.gurv.vg.api.swagger.aggregate.config.SwaggerAggregateServicesConfig
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Controller
import springfox.documentation.swagger.web.SwaggerResource
import springfox.documentation.swagger.web.SwaggerResourcesProvider

@Controller
@Primary
class PropertyResourceProvider implements SwaggerResourcesProvider {

    @Autowired
    private SwaggerAggregateServicesConfig config

    /**
     * Build and return list of Swagger Resources (i.e. each microservice api-docs info)
     */
    @Override
    List get() {
        config.services.collect { svc ->
            new SwaggerResource(
                    name: svc.name,
                    location: svc.url,
                    swaggerVersion: svc.version
            )
        }
    }
}
