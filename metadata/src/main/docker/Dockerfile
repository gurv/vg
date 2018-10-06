FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-metadata-$VG_VERSION

RUN mkdir /opt
COPY build/libs/vg-metadata.jar $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-metadata

COPY src/main/docker/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 8082
CMD ["metadata"]