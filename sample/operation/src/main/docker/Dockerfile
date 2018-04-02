FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

ENV JAVA_OPTS ""

VOLUME /tmp

COPY vg-operation-0.1.0.jar ./
RUN sh -c 'touch /vg-operation-0.1.0.jar'

EXPOSE 8101

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /vg-operation-0.1.0.jar" ]
