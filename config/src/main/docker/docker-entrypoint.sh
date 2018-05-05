#!/bin/sh
set -ex

if [ "$1" = 'config' ]; then
    shift
    cd /opt/vg-config
    java \
        -Djava.security.egd=file:/dev/./urandom \
        "$@" \
        -jar ./app.jar
fi

exec "$@"