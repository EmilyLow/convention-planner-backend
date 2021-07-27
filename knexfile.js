

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/convention-data.db3'
    },
    useNullAsDefault: true,
    
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    },
  },
  


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
   
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    },

    useNullAsDefault: true
  }

};
