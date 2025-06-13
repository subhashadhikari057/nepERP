// backend/test-db.js
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'erp_db',
  password: '2057',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('✅ PostgreSQL connected successfully!');
    return client.end();
  })
  .catch((err) => {
    console.error('❌ PostgreSQL connection failed:', err.message);
  });
