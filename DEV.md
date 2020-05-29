# Easyblue App

This is the development of the app easyblue, by Kérian MONTES-MORIN.

## How to install
### Environnement
If you allready have node environnement, you can skip this part.

But if you want to create a specific docker, you can create an `docker-compose.yaml` and write :
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
Run `make server` in the project root to :
* Install assets
* Build files
* Run the server

## How to use
### Tests
Jest use components/pages snapshots to test project.

If you want to test the projet, run `make test`.
If you want to refresh snapshots, run `make fresh-test`.

### Login
Fill the login form to access to dashboard.
Credentials are :
* **email** : `foo@test.fr`
* **password** : `foo`

If credentials were valid, your now on dashboard page
### Dashboard
Read-only page
