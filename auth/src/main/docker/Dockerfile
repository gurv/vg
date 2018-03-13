FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-auth-0.1.0.jar vg-auth-0.1.0.jar
RUN sh -c 'touch /vg-auth-0.1.0.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -jar /vg-auth-0.1.0.jar" ]

EXPOSE 5000
