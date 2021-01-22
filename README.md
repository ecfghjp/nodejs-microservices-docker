## Node JS Microservices with Docker
The project aims at showcasing microservices development best practices in **nodejs** using a simple users and notes microservice
The Project uses docker to cotainerise apps and expose it to the outer world
Docker-compose is used compose the 2 apps and use the configuration

## Microservices architecture using user and notes microservices

## User Microservice
Users microservices contains functionality for CRUD Operations on User resourse developed in line with  the microservices architecture. 

The Microservice uses route/controller pattern. Mongodb is used as a backend database [MongoDB](https://www.mongodb.com).

The service runs in a docker container at port 3000 and can be accessed from the localhost(localmachine) at port 9000

## Notes Microservice

Notes microservices contains functionality for CRUD Operations on Notes resourse developed in line with  the microservices architecture. 

The Microservice uses route/controller pattern. Mongodb is used as a backend database [MongoDB](https://www.mongodb.com).

The service runs in a docker container at port 3001 and can be accessed from the localhost(localmachine) at port 9001

## Interaction between microservices

The interaction betrween microservices can be done in several different ways but just to keep things simple, there is a route in 
**Users** service that connects to the notes microservice to get all notes for the user.

The route uses **requests** npm package to make a http GET request to notes api

## Exception Handling

## Unit Testing and Integration Testing

## Dockerise using Docker File and Docker Compose

## Use different environments(dev, prod) and have different set of ßproperties

## Node and microservices best practices

## Swagger documentation

## Logging
