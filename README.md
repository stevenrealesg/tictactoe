# tictactoe
Este repositorio consta de dos directorios, backend y frontend, llamados `api` y `frontend` respectivamente.

## Instalación
1. Clona este repositorio.
2. En tu máquina, crea una base de datos PostgreSQL, con el nombre que prefieras.
3. En la raíz de este repositorio encontrarás un archivo llamado `table_history.sql`, ejecuta ese código para la creación de la tabla necesaria, o crea esta tabla manualmente teniendo el cuenta el tipo y nombre de datos que aparecen en esta.
4. Ingresa al directorio `cd tictactoe/api` y ejecuta `npm install`.
5. Ingresa al directorio `cd tictactoe/frontend` y ejecuta `npm install`.

## Configuración de entorno
### Backend
Ingresa al directorio `cd tictactoe/api` y ahí crea un archivo `.env` con los siguientes parámetros:

```
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=123456
PGDATABASE=tictactoe
PGPORT=5432

PORT=3001
```
- Las primeras variables comenzadas por `PG...` corresponden a la conexión a la base de datos, por lo que estos valores dependen de la configuración de tu máquina.

- La variable `PORT` corresponde al puerto donde se va estar ejecutando el servidor, si no se agrega, este tomará por defecto el valor de `3001`.

### Frontend
Ingresa al directorio `cd tictactoe/frontend` y ahí crea un archivo `.env` con los siguientes parámetros:

```
REACT_APP_URL_API=http://localhost:3001
PORT=5000
```
- La variable `REACT_APP_URL_API` corresponde a la URL donde se está ejecutando el servidor. Si no se agrega, este tomará el valor por defecto de `http://localhost:3001`.

- La variable `PORT` corresponde al puerto donde se va estar ejecutando el cliente, si no se agrega, este tomará por defecto el valor de `3000`.

## Despliegue
De forma paralela ejecutar `npm start` en el directorio `cd tictactoe/api` y en el directorio `cd tictactoe/frontend`. Siendo más específico, abre dos terminales, ubícate en cada uno de estos directorios y ejecuta el comando.
