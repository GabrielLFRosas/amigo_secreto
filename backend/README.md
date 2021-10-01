# amigo_secreto

# versoes
DOCKER -> 20.10.8
DOCKER COMPOSE -> 1.29.2


# PASSOS PARA RODAR A APLICACAO
    para iniciar o projeto, rodar "npm install"
    # backend
        (NA PASTA BACKEND EXECUTAR)
        1 -> Rodar o comando "docker-compose up -d", para subir a base de dados

        2 -> para rodar as migracoes rode o comando "knex migrate:latest"
        
        3 -> rodar o "npm start"
        
        Obs: o back estara rodando na porta 8000 
        
    # frontend
        (NA PASTA FRONTEND EXECUTAR)
        1 -> Rodar o comando "npm start"
        
        Obs: o front estara rodando na porta 3000

