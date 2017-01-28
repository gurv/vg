package ru.gurv.vg.metadata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
@EntityScan(basePackages = "ru.gurv.vg.metadata.domain")
@RestController //TODO временно для проверки...
public class MetadataApplication {

	public static void main(String[] args) {
		SpringApplication.run(MetadataApplication.class, args);
	}

	@RequestMapping("/test")
	public String test() {
		return "Hello World!";
	}

}