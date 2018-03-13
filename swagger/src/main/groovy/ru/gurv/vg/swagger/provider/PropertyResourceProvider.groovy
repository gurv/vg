package ru.gurv.vg.swagger.provider

import ru.gurv.vg.swagger.config.SwaggerServicesConfig
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Controller
import springfox.documentation.swagger.web.SwaggerResource
import springfox.documentation.swagger.web.SwaggerResourcesProvider

@Controller
@Primary
class PropertyResourceProvider implements SwaggerResourcesProvider {

    @Autowired
    private SwaggerServicesConfig config

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
