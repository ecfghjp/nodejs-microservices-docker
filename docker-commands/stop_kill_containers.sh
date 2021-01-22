docker stop $(docker ps -aq)
docker rm -f $(docker ps -aq)
docker rmi -f docker-compose_users-app
docker rmi -f docker-compose_notes-app
docker rmi -f docker-compose_mongo
docker images