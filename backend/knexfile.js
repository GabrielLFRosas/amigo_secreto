// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    database: 'amigo_secreto',
    host : '127.0.0.1',
    port : 15432,
    user : 'postgres',
    password : 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
