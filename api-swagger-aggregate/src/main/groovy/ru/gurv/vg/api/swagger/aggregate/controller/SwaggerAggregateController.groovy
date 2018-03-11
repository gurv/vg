package ru.gurv.vg.api.swagger.aggregate.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class SwaggerAggregateController {

    @GetMapping(path = "/swagger")
    String redirectToSwagger() {
        return "redirect:/swagger-ui.html"
    }
}
