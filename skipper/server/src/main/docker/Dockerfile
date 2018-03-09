FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV APP_VERSION $$springCloudSkipperServerVersion$$
ENV JAVA_OPTS ""

RUN wget -q http://central.maven.org/maven2/org/springframework/cloud/spring-cloud-skipper-server/$APP_VERSION/spring-cloud-skipper-server-$APP_VERSION.jar

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar spring-cloud-skipper-server-$APP_VERSION.jar" ]

EXPOSE 7577
