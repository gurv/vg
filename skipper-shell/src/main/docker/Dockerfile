FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-skipper-shell-$VG_VERSION

RUN mkdir /opt
COPY build/libs/*.jar $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-skipper-shell

COPY src/main/docker/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["skipper-shell"]