#!/bin/sh
set -ex

if [ "$1" = 'swagger' ]; then
    shift
    cd /opt/vg-swagger
    java \
        -Dspring.cloud.config.uri=http://config:8888 \
        -Dspring.cloud.config.failFast=true \
        $JAVA_OPTS \
        -jar ./app.jar
fi

exec "$@"