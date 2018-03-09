FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

ADD app.jar app.jar
RUN sh -c 'touch /app.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -Dspring.cloud.config.uri=http://config:8888 -Dspring.cloud.config.failFast=true -jar /app.jar" ]

EXPOSE 8761
