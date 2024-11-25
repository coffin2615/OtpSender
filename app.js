const express = require('express');
const userRouter = require('./src/controller/user.controller.js');
const app = express();
app.use('/user', userRouter);
app.get('/', (req, res) => {
  res.send('hii');
});
module.exports = app;