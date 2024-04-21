import express from 'express' // express 모듈을 불러온다.
import { readdirSync } from 'fs' // fs 모듈에서 readdirSync 함수를 불러온다.

const app = express() // express를 app 변수에 담는다.
const routes = readdirSync('./routes') // routes 폴더의 파일 목록을 가져온다.

app.listen(3000, () => console.log('서버 시작')) // 서버 시작 코드

routes.forEach(async (file) => {
  const { path, router } = await import('./routes/' + file)
  app.use(path, router)
})
