# Backend Microservices - Star Wars

Este proyecto, diseñado para mejorar las habilidades (Upskilling) en microservicios, se basa en una arquitectura de microservicios que utiliza MongoDB Atlas como servicio de base de datos. Se utilizan contenedores Docker para implementar los microservicios, y Docker Compose orquesta todos estos contenedores. El proyecto se encuentra desplegado en una instancia de VM en Google Cloud.

## Servicios

- **Gateway**: Actúa como el punto de entrada de la aplicación.
- **Characters**: Proporciona información sobre los personajes de Star Wars.
- **Films**: Proporciona información sobre las películas de Star Wars.
- **Planets**: Proporciona información sobre los planetas de Star Wars.
- **Database**: Un servicio de base de datos utilizado por otros servicios.

## Instrucciones

- Asegúrate de tener Docker instalado en tu sistema antes de continuar.

- Esta es la estructura de carpetas con Docker:

```plaintext
.
├── characters
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── films
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── planets
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── database
│   ├── Dockerfile
│   ├── package.json
│   ├── .env
├── gateway
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── docker-compose.yml
```
Debes crear un archivo .env en la carpeta database con la configuración de tu MongoDB, por ejemplo:

```Shell
MONGO_URI = username:password@config-de-mongo/starwars
```
### Ejecución
Para ejecutar los servicios en un entorno local de desarrollo, sigue estos pasos:

1. Abre una terminal y navega hasta el directorio principal del proyecto.

2. Ejecuta el siguiente comando para iniciar los servicios:

```shell
docker-compose up
```
   Esto creará y ejecutará los contenedores de Docker para cada servicio definido en docker-compose.yml. Los servicios estarán disponibles en los puertos especificados en el archivo de configuración.

Puedes acceder a las rutas trabajando en las rutas, por ejemplo:
   - http://localhost:8000/characters para obtener información sobre los personajes.
  
  - http://localhost:8000/planets para obtener información sobre los planetas.

   ### Desde la nube
   El proyecto ya está en funcionamiento en una máquina virtual (VM). Sin embargo, ten en cuenta que se utiliza la versión gratuita, que tiene un límite de 90 días o ha consumido los $300 de crédito disponibles.

Las rutas están disponibles en la siguiente dirección:
- http://34.94.22.204:8000

No necesitas realizar ninguna acción adicional para probar el proyecto. Solo accede a las rutas, por ejemplo:

- http://34.94.22.204:8000/characters para obtener información sobre los personajes o utiliza esta dirección IP para cualquier operación CRUD en el frontend.

