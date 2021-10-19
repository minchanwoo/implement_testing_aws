const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET REQUEST~!!')
});

router.post('/', (req, res) => {
  console.log('BODY!!!', req.body)
  console.log('QUERY~!!', req.query)
  res.send('POST REQUEST~!!')
});

module.exports = router;