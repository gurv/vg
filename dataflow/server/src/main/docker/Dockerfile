FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV APP_VERSION $$springCloudDataflowServerLocalVersion$$
ENV JAVA_OPTS ""

RUN wget -q https://repo.spring.io/milestone/org/springframework/cloud/spring-cloud-dataflow-server-local/$APP_VERSION/spring-cloud-dataflow-server-local-$APP_VERSION.jar

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar spring-cloud-dataflow-server-local-$APP_VERSION.jar" ]

EXPOSE 9393
