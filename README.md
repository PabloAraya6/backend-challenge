# Backend challenge

Desafío técnico para Envíame

## Description

* API hecha en Node con Express, en un container de Docker.
* Base de datos en MySQL, en otro container de Docker, con su respectivo volumen.

## Getting Started
### Dependencias

Tener instalado [Docker](https://docs.docker.com/compose/install/)

### Ejecutando

1. Clonar repositorio
```
git clone 'https://github.com/PabloAraya6/backend-challenge'
```
2. Dentro de la carpeta, en la terminal levantar los containers
```
 docker-compose up
```
3. Mensaje de éxito
```
api       | > backend-challenge@1.0.0 start
api       | > node app.js
api       | 
api       | Server running on port: 8000
api       | Database online! 🚀
api       | Testing database.. 🔌
api       | SELECT 1+1: 2
```
### Testing
1. Importar colección de Postman para probar API
```
https://www.getpostman.com/collections/2c9ad26f5a5c5cb74abe
```
* Ejercicio 1 - Docker
* Ejercicio 2 - Carpeta: companies, faker: request seed
* Ejercicio 3 - palindrome
* Ejercicio 4 - store shipment apiEnviame
* Ejercicio 5 - fibonacci
* Ejercicio 6 - time delivery
* Ejercicio 7 - update salary

## Ayuda
* Asegurarse que no hay ningún servicio corriendo en el puerto 3306

## Authors

Pablo Araya
* Email: arayap812@gmail.com
* LinkedIn: https://www.linkedin.com/in/pabloaraya6/

## Acknowledgments

* [Node.js]
* [MySQL]
* [Docker]
