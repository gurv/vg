#!/bin/sh
set -ex

if [ "$1" = 'dataflow' ]; then
    shift
    cd /opt/vg-dataflow
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