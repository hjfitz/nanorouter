import http from 'node:http'
import { router, route } from './index.js'

router.get('/hello', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, GET!')
})

router.post('/world', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, POST!')
})

router.any('/any', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Hello, ${req.method}!`)
})


//Example with next function
router.any('*', (req, res, next) => {
    console.log("First handler")
    next()
})

router.get('/chained', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Chained Handler')
})

const server = http.createServer(route)

await new Promise(res => server.listen(3001, res))

console.log('Server listening on port 3000')


