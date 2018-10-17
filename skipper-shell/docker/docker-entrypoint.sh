#!/bin/sh
set -ex

if [ "$1" = 'skipper-shell' ]; then
    shift
    cd /opt/vg-skipper-shell
    java \
        -Djava.security.egd=file:/dev/./urandom \
        -Dspring.cloud.config.uri=http://config:8888 \
        -Dspring.cloud.config.failFast=true \
        "$@" \
        -jar ./app.jar
fi

exec "$@"