const express = require('express')
const router = express.Router()

const path = '/'

router.get('/', (req, res) => {
  const user = {
    name: '홍길동',
    age: 25,
  }
  res.send(user)
})

module.exports = { path: path, router: router }
