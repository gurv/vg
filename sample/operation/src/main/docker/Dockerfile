FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

ADD app.jar app.jar
RUN sh -c 'touch /app.jar'

EXPOSE 8101

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /app.jar" ]
