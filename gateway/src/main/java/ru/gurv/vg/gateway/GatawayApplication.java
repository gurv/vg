package ru.gurv.vg.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;

@SpringBootApplication
@EnableSidecar
public class GatawayApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatawayApplication.class, args);
    }

}
