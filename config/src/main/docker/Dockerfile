FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-config-$VG_VERSION

RUN mkdir /opt
COPY build/libs/vg-config.jar $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-config

COPY src/main/docker/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 6000
CMD ["config"]
