const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.get('/', async(req, res) => {
  const users = await User.findAll({
    order:[['id', 'DESC']]
  });
  res.send(users)
});


router.post('/',  async(req, res) => {
  const { nick, name, email, password } = req.body;

  await User.create({
    email,
    nick,
    name,
    password
  });

  res.send('OK');
});


module.exports = router;