const express = require('express');
const userRouter = express.Router();
userRouter.get('/',(req, res) => {
  res.send('hii i am in user Router');
});
module.exports = userRouter;