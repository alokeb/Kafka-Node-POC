FROM node:latest

# Create app directory
WORKDIR /usr/src/kafka_producer

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
RUN npm i linebyline
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080/tcp 8080/tcp

CMD [ "node", "producer.js" ]