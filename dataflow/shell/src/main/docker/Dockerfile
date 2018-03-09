FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV APP_VERSION $$springCloudDataflowShellVersion$$
ENV JAVA_OPTS ""

RUN wget -q http://repo.spring.io/release/org/springframework/cloud/spring-cloud-dataflow-shell/$APP_VERSION/spring-cloud-dataflow-shell-$APP_VERSION.jar

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar spring-cloud-dataflow-shell-$APP_VERSION.jar" ]
