package ru.gurv.vg.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @GetMapping("/hello")
    String home(Principal user) {
        return "Hello " + user.getName();
    }
}
