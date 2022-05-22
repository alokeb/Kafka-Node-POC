FROM node:lts

# Create app directory
WORKDIR /usr/src/kafka_producer

# Install app dependencies
COPY package*.json ./

RUN npm install
#RUN npm i express socket.io kafka-node
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "producer.js" ]