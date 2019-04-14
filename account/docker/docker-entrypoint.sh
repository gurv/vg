#!/bin/sh
set -ex

if [ "$1" = 'account' ]; then
    shift
    cd /opt/account
    java \
        $JAVA_OPTS \
        -Djava.security.egd=file:/dev/./urandom \
        -Dspring.cloud.config.uri=http://config:8888 \
        -Dspring.cloud.config.failFast=true \
        -jar ./app.jar
fi

exec "$@"