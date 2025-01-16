# nanorouter: minimal routing, maximum performance

* [Purpose](#purpose)
* [Architecture Overview](#architecture-overview)
* [Getting Started](#getting-started)
* [Configuration](#configuration)
* [Usage](#usage)
* [Exports](#exports)

## Purpose

Nanorouter is an incredibly lightweight routing library for Node.js.

It provides a simple and efficient way to define and handle HTTP requests based on their method and path.  This library is designed for minimal overhead and maximum flexibility, making it suitable for small to medium-sized projects where a full-fledged framework might be overkill.

## Getting Started

1. **Installation:**
   ```bash
   npm install nanorouter
   ```

2. **Usage:**  Import the `router` and `route` functions from `nanorouter`.


## Configuration

NanoRouter does not require any external configuration.


## Usage

This example demonstrates how to define routes and handle requests using NanoRouter:

```js
import { router, route } from 'nanorouter'

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
router.get('/chained', (req, res, next) => {
    console.log("First handler")
    next()
})

router.get('/chained', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Chained Handler')
})

const http = require('http')
const server = http.createServer(route)

await new Promise(res => server.listen(3000, res))

console.log('Server listening on port 3000')

```

