# Tic Tac Toe

### Dependencies

* Node.js
* Knex
* PostgreSQL

### Get it

    `git clone https://github.com/bottd/tic-tac.git`

    `cd tic-tac`

Install your node dependencies by running

`$ npm i`


### Get it running

First, you need to create the database user the app will use by manually typing the following in your terminal:

```sh
$ sudo -u postgres psql -c "CREATE DATABASE tictac"
```

To setup and seed database run these knex commands
```
$ knex migrate:latest
```

You can then run the server locally with the run script
```sh
$ npm start
```

Once the server is running navigate your browser to http://localhost:4000
