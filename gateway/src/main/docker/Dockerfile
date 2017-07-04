FROM openjdk:jre-alpine
MAINTAINER Vladimir Gurinovich <vladimir.gurinovich@gmail.com>

VOLUME /tmp

ADD app.jar app.jar
RUN sh -c 'touch /app.jar'

ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dspring.profiles.active=docker -Dspring.cloud.config.uri=http://config:8888 -Dspring.cloud.config.failFast=true -jar /app.jar" ]

EXPOSE 10000