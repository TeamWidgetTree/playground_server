import express from 'express'

export const router = express.Router()

export const path = '/'

router.get('/', (req, res) => {
  const user = {
    name: '홍길동',
    age: 25,
  }
  res.send(user)
})
