FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-config-0.1.0.jar vg-config-0.1.0.jar
RUN sh -c 'touch /vg-config-0.1.0.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -jar /vg-config-0.1.0.jar" ]

EXPOSE 8888
