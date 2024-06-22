FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY commands/ commands/
COPY index.js .
COPY deploy-commands.js .

LABEL org.opencontainers.image.name="violette"
LABEL org.opencontainers.image.description="Violette is a simple discord bot that can be used to execute commands on a Minecraft server."
LABEL org.opencontainers.image.source="hhttps://github.com/my-chill/Violette"
LABEL org.opencontainers.image.version="1.0.0"

RUN [ "node", "/app/deploy-commands.js" ]
CMD [ "node", "/app/index.js" ]