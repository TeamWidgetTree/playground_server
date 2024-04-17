const express = require('express') // express 모듈을 불러온다.
const fs = require('fs') // fs 모듈을 불러온다.
const app = express() // express를 app 변수에 담는다.
const routes = fs.readdirSync('./routes') // routes 폴더의 파일 목록을 가져온다.

app.listen(3000, () => console.log('서버 시작')) // 서버 시작 코드

routes.forEach((path) => {
  const route = require(`./routes/${path}`)
  app.use(route.path, route.router)
})
