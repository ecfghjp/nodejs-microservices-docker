rm .env
touch .env
chmod +x .env
cp -v notes-app-dev.env .env
cat db-dev.env>>.env
printf "\n">>.env
cat users-app-dev.env>>.env
docker-compose up --build



