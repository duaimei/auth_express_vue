module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'auth_express_vue_dev',
      user: 'auth_express',
      password: 'auth_express',
      schema: 'my_schema'
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
    // ,
    // pool: {
    //   afterCreate: (conn, cb) => {
    //     conn.run('PRAGMA foreign_keys = ON', cb);
    //   }
    // }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
