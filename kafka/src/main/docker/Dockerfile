#TODO Официального docker-образа нет, поэтому вынужденная зависимость от 3-х лиц
# Полезное oб этом образе:
#   DockerHub: https://hub.docker.com/r/wurstmeister/kafka/
#   GitHub: https://github.com/wurstmeister/kafka-docker
#   Tutorial: http://wurstmeister.github.io/kafka-docker/
FROM wurstmeister/kafka

# prometheus
COPY prometheus.yml /usr/app/prometheus.yml
ADD http://central.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.10/jmx_prometheus_javaagent-0.10.jar /usr/app/jmx_prometheus_javaagent.jar
RUN chmod +r /usr/app/jmx_prometheus_javaagent.jar

EXPOSE 9092 1234