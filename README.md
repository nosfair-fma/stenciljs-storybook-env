dev-url: http://localhost:8080

docker-compose up -d

docker-compose exec yarn generate <COMPONENT>

docker-compose exec yarn test

docker-compose exec yarn e2e

docker-compose down

docker-compose run --rm yarn build