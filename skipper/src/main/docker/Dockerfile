FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ARG jar=app.jar

ENV java_opts=""

COPY ./ ./
RUN ["sh", "-c", \
    "touch /$jar"]

#ENTRYPOINT [ "sh", "-c", "java -cp ./$jar -Dloader.path=monitoring -Dloader.config.location=application.yml $java_opts org.springframework.boot.loader.PropertiesLauncher" ]
ENTRYPOINT [ "sh", "-c", "java -cp ./spring-cloud-skipper-server-1.0.1.RELEASE.jar -Dloader.path=monitoring -Dloader.config.location=application.yml $java_opts org.springframework.boot.loader.PropertiesLauncher" ]

EXPOSE 7577
