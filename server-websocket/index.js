const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const cors = require('cors')

const app = express()
app.use(cors())

let counter = 0

app.get('/counter', (req, res) => {
	res.json({ counter })
})

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
	ws.send(JSON.stringify({ counter }))
})

setInterval(() => {
	counter++
	wss.clients.forEach(client => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify({ counter }))
		}
	})
}, 1000)

server.listen(4000, () => {
	console.log('Server running on http://localhost:4000')
})
