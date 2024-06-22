# Violette

Violette is a simple discord bot that can be used to execute commands on a Minecraft server.

## Configuration
The configuration is done through environment variables. The following variables are required
  - `CLIENT_TOKEN`
  - `CLIENT_ID`
  - `GUILD_ID`
  - `RCON_HOST`
  - `RCON_PORT`
  - `RCON_PASSWORD`
  - `TZ`
  - `LOCALE`
  - `NODE_ENV`
  - `PORT`

## Installation
    docker compose build
    docker compose up -d