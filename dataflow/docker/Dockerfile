FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/dataflow-$VG_VERSION/
ARG JAR_FILE

RUN mkdir /opt
COPY $JAR_FILE $HOME/app.jar
COPY build/libs/*.yml $HOME
COPY build/monitoring $HOME/monitoring
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/dataflow

COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 9393
CMD ["dataflow"]