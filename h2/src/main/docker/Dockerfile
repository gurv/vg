FROM java:8-jre

MAINTAINER $$maintainer$$

ENV H2_VERSION $$h2Version$$
ENV H2_PARENT_DIR /opt

RUN wget -q http://h2database.com/h2-$H2_VERSION.zip \
  && unzip -qq h2-$H2_VERSION.zip \
  && mv h2 $H2_PARENT_DIR \
  && rm -f h2-$H2_VERSION.zip

# prometheus
COPY prometheus.yml /usr/app/prometheus.yml
ADD http://central.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.10/jmx_prometheus_javaagent-0.10.jar /usr/app/jmx_prometheus_javaagent.jar
RUN chmod +r /usr/app/jmx_prometheus_javaagent.jar

CMD java -classpath $H2_PARENT_DIR/h2/bin/*.jar org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9093 -web -webAllowOthers -webPort 8083 -baseDir /db_data

EXPOSE 8083 9093 1235
