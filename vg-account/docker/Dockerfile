FROM openjdk:jre-alpine

ARG VG_VERSION=0.1.0-SNAPSHOT
ARG HOME=/opt/vg-account-$VG_VERSION
ARG JAR_FILE

RUN mkdir /opt
COPY $JAR_FILE $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-account

COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 6000
CMD ["account"]
