FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/kafka_consumer
WORKDIR /usr/src/kafka_consumer

# Install app dependencies
RUN npm i --package-lock-only
COPY package*.json /usr/src/kafka_consumer/

RUN npm install
#RUN npm i express socket.io kafka-node
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/kafka_consumer/

CMD [ "node", "consumer.js" ]