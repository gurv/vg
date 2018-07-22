FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-swagger-$VG_VERSION

RUN mkdir /opt
COPY build/libs/*.jar $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-swagger

COPY src/main/docker/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 8084
CMD ["swagger"]