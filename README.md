# amigo_secreto



NODE -> 10.19.0
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "knex": "^0.95.11",
    "pg": "^8.7.1"
    
DOCKER -> 20.10.8
DOCKER COMPOSE -> 1.29.2


PASSOS PARA RODAR A APLICACAO

1 -> Rodar o comando "docker-compose up -d", para subir a base de dados

2 -> para rodar as migracoes rode o comando "knex migrate:latest"

