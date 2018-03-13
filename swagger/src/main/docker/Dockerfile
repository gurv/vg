FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-swagger-0.1.0.jar ./
RUN sh -c 'touch /vg-swagger-0.1.0.jar'

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /vg-swagger-0.1.0.jar" ]
