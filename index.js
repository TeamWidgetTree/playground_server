const express = require('express') // express 모듈을 불러온다.
const app = express() // express를 app 변수에 담는다.
app.listen(3000, () => console.log('서버 시작')) // 서버 시작 코드

app.use('/', require('./routers/root'))
