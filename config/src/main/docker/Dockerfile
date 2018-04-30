FROM openjdk:jre-alpine

MAINTAINER $$maintainer$$

VOLUME /tmp

COPY *.jar ./app.jar
RUN [ \
    "touch", \
    "/app.jar" \
    ]

ENTRYPOINT [ "java" ]
CMD [ \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", "/app.jar" \
    ]

EXPOSE 8888
