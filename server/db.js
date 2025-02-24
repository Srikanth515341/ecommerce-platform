const { Client } = require('pg'); // Import pg client

// Create a new PostgreSQL client and connect
const client = new Client({
  user: 'postgres',   // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'ecommerce_db',         // Replace with your database name
  password: 'Srikanth@123',  // Replace with your PostgreSQL password
  port: 5432,
});

client.connect()  // Connect to the PostgreSQL server
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
