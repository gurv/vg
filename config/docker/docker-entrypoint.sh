#!/bin/sh
set -ex

if [ "$1" = 'config' ]; then
    shift
    cd /opt/config
    java \
        $JAVA_OPTS \
        -Djava.security.egd=file:/dev/./urandom \
        -jar ./app.jar
fi

exec "$@"