.PHONY: help build up down stop restart build-up build-up-logs logs

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

restart:
	docker compose restart

build-up:
	docker compose build
	docker compose up -d

build-up-dev:
	docker compose -f docker-compose-dev.yml build
	docker compose -f docker-compose-dev.yml up
