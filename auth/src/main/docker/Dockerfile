FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1
ARG HOME=/opt/vg-auth-$VG_VERSION

RUN mkdir /opt
COPY build/libs/vg-auth.jar $HOME/app.jar
RUN touch $HOME/app.jar && \
    ln -s $HOME /opt/vg-auth

COPY src/main/docker/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 5000
CMD ["auth"]