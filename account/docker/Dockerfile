FROM openjdk:11-jre-slim

ARG VG_VERSION
ARG HOME=/opt/account-$VG_VERSION
ARG JAR_FILE

COPY $JAR_FILE $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/account

COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 6000
CMD ["account"]
