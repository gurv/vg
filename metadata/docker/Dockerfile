FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-metadata-$VG_VERSION
ARG JAR_FILE

RUN mkdir /opt
COPY $JAR_FILE $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-metadata

COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 8082
CMD ["metadata"]