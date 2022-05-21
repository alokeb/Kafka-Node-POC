FROM bitnami/node:latest

#Pass auth_tokens etc
#ARG NPM_TOKEN
#COPY npmrc /root/.npmrc

COPY . /kafka_producer

WORKDIR /kafka_producer
RUN npm install

CMD node producer.js