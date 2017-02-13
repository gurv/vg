FROM openjdk:jre-alpine
MAINTAINER Vladimir Gurinovich <vladimir.gurinovich@gmail.com>

VOLUME /tmp

ADD app.jar app.jar
RUN sh -c 'touch /app.jar'

ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]

EXPOSE 8881
