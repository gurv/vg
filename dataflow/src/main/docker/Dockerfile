FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ARG jar=spring-cloud-dataflow-server-local-1.4.0.RC1.jar

ENV java_opts=""

COPY ./ ./
RUN ["sh", "-c", \
    "touch /spring-cloud-dataflow-server-local-1.4.0.RC1.jar"]

#CMD ["sh", "-c", "java -cp ./spring-cloud-dataflow-server-local-1.4.0.RC1.jar -Dloader.path=libs -Dmanagement.security.enabled=false -Dmanagement.endpoints.web.exposure.include=health,info,prometheus $JAVA_OPTS org.springframework.boot.loader.PropertiesLauncher"]
ENTRYPOINT [ "sh", "-c", "java -cp ./spring-cloud-dataflow-server-local-1.4.0.RC1.jar -Dloader.path=monitoring -Dloader.config.location=application.yml $java_opts org.springframework.boot.loader.PropertiesLauncher" ]

EXPOSE 9393
