FROM java:8-jre

MAINTAINER $$maintainer$$

ENV H2_VERSION $$h2Version$$
ENV H2_PARENT_DIR /opt

RUN wget -q http://h2database.com/h2-$H2_VERSION.zip \
  && unzip -qq h2-$H2_VERSION.zip \
  && mv h2 $H2_PARENT_DIR \
  && rm -f h2-$H2_VERSION.zip

EXPOSE 8083
EXPOSE 9093

CMD java -classpath $H2_PARENT_DIR/h2/bin/*.jar org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9093 -web -webAllowOthers -webPort 8083 -baseDir /db_data