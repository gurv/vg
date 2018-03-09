FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV APP_VERSION $$springCloudSkipperShellVersion$$
ENV JAVA_OPTS ""

RUN wget -q http://central.maven.org/maven2/org/springframework/cloud/spring-cloud-skipper-shell/$APP_VERSION/spring-cloud-skipper-shell-$APP_VERSION.jar

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar spring-cloud-skipper-shell-$APP_VERSION.jar" ]
