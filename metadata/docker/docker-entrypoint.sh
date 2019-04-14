#!/bin/sh
set -ex

if [ "$1" = 'metadata' ]; then
    shift
    cd /opt/metadata
    java \
        -Djava.security.egd=file:/dev/./urandom \
        -Dspring.cloud.config.uri=http://config:8888 \
        -Dspring.cloud.config.failFast=true \
        $JAVA_OPTS \
        -jar ./app.jar
fi

exec "$@"