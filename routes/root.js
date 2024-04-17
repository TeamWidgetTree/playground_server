const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const user = {
    name: '홍길동',
    age: 25,
  }
  res.send(user)
})

module.exports = router
