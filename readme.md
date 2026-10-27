# Microservicios - Star Wars 🌌

¡Hola! Te doy la bienvenida a mi proyecto de microservicios. Lo creé con un objetivo muy claro: **practicar y mejorar mis habilidades** en esta forma de construir software. Te cuento cómo está armado, para que puedas entenderlo, ejecutarlo y, si quieres, explorarlo o mejorarlo.

## ¿Qué es esto?

En lugar de construir una sola aplicación grande, dividí el proyecto en **pequeños servicios independientes**. Cada uno tiene una responsabilidad concreta y se comunica con los demás a través de la red. Todos cuentan con información del universo de Star Wars: personajes, películas y planetas.

Para la base de datos utilizo **MongoDB Atlas**, cada servicio se empaqueta en un **contenedor Docker** y **Docker Compose** es quien los levanta y coordina todos juntos. El proyecto también está desplegado en una **máquina virtual de Google Cloud**, así que puedes probarlo sin instalar nada.

## Los servicios

Estas son las piezas que componen el proyecto:

- **Gateway**: es la puerta de entrada. Recibe todas tus peticiones y las reenvía al servicio que corresponda.
- **Characters**: maneja la información de los personajes de Star Wars.
- **Films**: maneja la información de las películas.
- **Planets**: maneja la información de los planetas.
- **Database**: es el servicio que se encarga de hablar con MongoDB. Los demás servicios le piden los datos a él en lugar de conectarse directamente.

Como regla general, tú siempre hablas con el **Gateway**, y él se encarga del resto.

## Antes de empezar

Lo primero que necesitas es tener **Docker** instalado en tu sistema. Si todavía no lo tienes, instálalo y verifica que esté funcionando antes de continuar.

Así se ve la estructura de carpetas del proyecto:

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

### Configura tu base de datos

El servicio `database` necesita saber dónde está tu MongoDB. Para eso, crea un archivo `.env` dentro de la carpeta `database` con la cadena de conexión. Por ejemplo:

```shell
MONGO_URI = username:password@config-de-mongo/starwars
```

Reemplaza `username`, `password` y `config-de-mongo` con los datos de tu propio clúster. Este archivo contiene información sensible, así que **no lo subas a Git**: el `.gitignore` del proyecto ya lo excluye por ti.

## Cómo ejecutarlo en tu computadora

Cuando tengas Docker y el `.env` listos, levantar el proyecto es muy sencillo:

1. Abre una terminal y ve a la carpeta principal del proyecto.

2. Ejecuta este comando:

   ```shell
   docker-compose up
   ```

   Docker creará y arrancará un contenedor para cada servicio definido en `docker-compose.yml`. La primera vez puede tardar un poco mientras descarga e instala todo, así que ten paciencia.

Una vez que todo esté corriendo, puedes probar las rutas. Por ejemplo:

- http://localhost:8000/characters para ver los personajes.
- http://localhost:8000/planets para ver los planetas.
- http://localhost:8000/films para ver las películas.

Todas las peticiones pasan por el puerto **8000** (el Gateway), y el Gateway las redirige al servicio correcto.

## Probarlo en la nube

Si no quieres instalar nada, puedes usar la versión que ya está funcionando en mi máquina virtual de Google Cloud. Solo ten en cuenta que es una cuenta **gratuita**, que tiene un límite de 90 días o de consumir los $300 de crédito disponibles. Si en algún momento no responde, es probable que ese crédito se haya agotado.

La dirección base es:

- http://34.94.22.204:8000

No necesitas hacer nada extra. Solo entra a las rutas, por ejemplo:

- http://34.94.22.204:8000/characters para ver los personajes.

También puedes usar esta dirección IP para hacer cualquier operación CRUD desde un frontend.

---

¡Gracias por pasarte por aquí! Si tienes dudas o ideas para mejorarlo, no dudes en comentarlas. Que la fuerza te acompañe. ⭐
