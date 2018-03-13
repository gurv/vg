FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-metadata-0.1.0.jar vg-metadata-0.1.0.jar
RUN sh -c 'touch /vg-metadata-0.1.0.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -jar /vg-metadata-0.1.0.jar" ]

EXPOSE 8082