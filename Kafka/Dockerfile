
FROM oraclelinux:lts
FROM openjdk:latest
#Kafka Version set to 3.20 (latest version as of now)
FROM kafka:3.2.0
ARG brokerId=1
 
#RUN tar -xzf kafka_2.13-3.2.0.tgz && \
 #   mv /kafka_2.13-3.2.0.tgz /kafka && \
 #   sed -i s/localhost:2181/zookeeper:2181/g /kafka/config/server.properties && \
 #   sed -i s/broker.id=0/broker.id=${brokerId}/g /kafka/config/server.properties
 
EXPOSE 2181 9092

#In this demo, kafka will be using container storage, for a production app appropriate external volumes should be mounted