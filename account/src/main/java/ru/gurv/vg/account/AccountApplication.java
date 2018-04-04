package ru.gurv.vg.account;

/*
import org.springframework.beans.factory.annotation.Autowired;
*/
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
/*
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
*/
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@SpringBootApplication
@EnableResourceServer
/*
@EnableOAuth2Client
*/
@EnableFeignClients
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableConfigurationProperties
@Configuration
@EntityScan(basePackages = "ru.gurv.vg.account.domain")
public class AccountApplication extends ResourceServerConfigurerAdapter {

/*
    @Autowired
    private ResourceServerProperties sso;
*/

    public static void main(String[] args) {
        SpringApplication.run(AccountApplication.class, args);
    }

    // Это было в PiggyMetrics
/*
	@Bean
	@ConfigurationProperties(prefix = "security.oauth2.client")
	public ClientCredentialsResourceDetails clientCredentialsResourceDetails() {
		return new ClientCredentialsResourceDetails();
	}

	@Bean
	public RequestInterceptor oauth2FeignRequestInterceptor(){
		return new OAuth2FeignRequestInterceptor(new DefaultOAuth2ClientContext(), clientCredentialsResourceDetails());
	}

	@Bean
	public OAuth2RestTemplate clientCredentialsRestTemplate() {
		return new OAuth2RestTemplate(clientCredentialsResourceDetails());
	}

	@Bean
	public ResourceServerTokenServices tokenServices() {
		return new CustomUserInfoTokenServices(sso.getUserInfoUri(), sso.getClientId());
	}
*/

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
                // Без этого не работает консоль H2
                .headers().frameOptions().sameOrigin()

                .and()
                .authorizeRequests()
				.antMatchers("/" , "/demo").permitAll();
				//.anyRequest().authenticated();
	}
}