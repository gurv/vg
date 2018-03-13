FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-gateway-0.1.0.jar vg-gateway-0.1.0.jar
RUN sh -c 'touch /vg-gateway-0.1.0.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -Dspring.cloud.config.uri=http://config:8888 -Dspring.cloud.config.failFast=true -jar /vg-gateway-0.1.0.jar" ]

EXPOSE 10000