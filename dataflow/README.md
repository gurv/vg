# Dataflow-сервер

## Запуск

java -jar dataflow/build/libs/spring-cloud-dataflow-server-local-<version>.jar

TODO ошибка сбора метрик сервиса prometheus:

level=warn ts=2018-03-31T14:49:00.290664Z caller=scrape.go:697 component="scrape manager" scrape_pool=dataflow target=http://dataflow:9393/management/prometheus msg="append failed" err="no token found"
