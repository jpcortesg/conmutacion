const express = require('express')
const WebSocket = require('ws')

let wss = new WebSocket.Server({
  port: 3001
})

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(data)
  })
})

const app = express()

app.set('view engine', 'pug')
app.use(express.json())
app.use('/assets', express.static(__dirname+'/assets'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  if (!req.body)
    return res.sendStatus(400)
  console.log(req.body)
  let data = req.body.data
  wss.clients.forEach(ws => {
    ws.send(data)
  })
  res.send(200)
})

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto ', 3000)
})