#!/bin/sh
set -ex

if [ "$1" = 'skipper' ]; then
    shift
    cd /opt/vg-skipper
    java \
        -cp ./app.jar \
        -Dloader.path=monitoring \
        -Dloader.config.location=application.yml \
        -Dspring.cloud.config.uri=http://config:8888 \
        -Dspring.cloud.config.failFast=true \
        "$@" \
        org.springframework.boot.loader.PropertiesLauncher
fi

exec "$@"