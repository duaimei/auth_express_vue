# install
$ npm i
$ knex migrate:latest

# main file
main.js

# client secret setup
https://console.developers.google.com
Then download the json and put the file in ./config/secrets.json

# create database
look in knexfile.js to see the database name and password that is expected in postgres
$ psql
$ create database auth_express_vue_dev \g
$ create user auth_express \g
$ psql auth_express_vue_dev auth_express

# knex specific commands
## new migration:
knex migrate:make <migration_name>

## run migrations
knex migrate:up
knex migrate:latest
knex migrate:down

$ knex seed:make seed_name
$ knex seed:run
$ knex seed:run --specific=seed-filename.js