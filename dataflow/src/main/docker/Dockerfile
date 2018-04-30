FROM openjdk:jre-alpine

ARG VG_VERSION=0.0.1

RUN mkdir /opt
COPY *.jar /opt/vg-dataflow-$VG_VERSION/app.jar
COPY *.yml /opt/vg-dataflow-$VG_VERSION
COPY monitoring /opt/vg-dataflow-$VG_VERSION/monitoring
RUN touch /opt/vg-dataflow-$VG_VERSION/app.jar && \
    ln -s /opt/vg-dataflow-$VG_VERSION /opt/vg-dataflow

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 9393
CMD ["dataflow"]