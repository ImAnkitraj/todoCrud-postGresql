
const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect().then(async ()=>console.log('Postgres database connected'));
const todoCreateQuery = `CREATE TABLE IF NOT EXISTS todos 
  (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100)
)`;

client.query(todoCreateQuery)
.then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

module.exports = client;