# Easyblue App

This is the development of the app easyblue, by Kérian MONTES-MORIN.

## Installation
### Environnement
You can create an `docker-compose.yaml` and write :
```text
version: '2'

services:
  easy_blue_app:
    tty: true # Enables debugging capabilities when attached to this container.
    image: 'bitnami/node:latest'
    ports:
      - 3000:3000
    volumes:
      - .\app:/app
```

### Project
Run `make` or `make server` in the project root to :
* Install assets
* Build files
* Run the server