FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-skipper-$VG_VERSION

RUN mkdir /opt
COPY *.jar $HOME/app.jar
COPY *.yml /opt/vg-skipper-$VG_VERSION
COPY monitoring /opt/vg-skipper-$VG_VERSION/monitoring
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-skipper

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 7577
CMD ["skipper"]