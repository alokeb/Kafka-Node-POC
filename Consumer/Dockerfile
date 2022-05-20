FROM node:lts

# Create app directory
WORKDIR /usr/src/kafka_consumer

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080/tcp 8081/tcp

CMD [ "node", "server.js" ]

