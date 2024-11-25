const app = require('./app.js');
const connection = require('./db.js')
const env = require('dotenv').config();
const port = process.env.PORT;
app.listen(port, async () => {
  await connection;
  console.log(`your server is listening to ${port} and DB is also connected`);
});