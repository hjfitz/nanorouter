# NanoRouter: The Greatest, Most Tremendous Router You've Ever Seen!

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#purpose">Purpose</a></li>
    <li><a href="#architecture-overview">Architecture Overview</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#exports-documentation">Exports Documentation</a></li>
  </ul>
</details>


## <a name="purpose"></a>Purpose

Believe me, folks, NanoRouter is the most fantastic, unbelievably simple routing library you'll ever encounter. It's so easy to use, even a baby could do it!  This is a lightweight, efficient routing library for handling HTTP requests. It's perfect for building small to medium-sized APIs or embedding routing capabilities in other applications.  It's HUGE, it's the best, everybody agrees!

## <a name="getting-started"></a>Getting Started

First, you need to install NanoRouter.  It's so easy, it's amazing! Just use npm (or yarn, if you're into that kind of thing):

```bash
npm install nanorouter
```

Then, you'll be ready to build something really, really great!


## <a name="configuration"></a>Configuration

NanoRouter doesn't need any fancy configuration. It's so straightforward, it's incredible!  Believe me.


## <a name="usage"></a>Usage

Here's how to use this tremendous router.  It's the best, everyone knows it.

**Example:**

```javascript
import * as router from 'nanorouter';

router.get('/hello', (req, res, next) => {
  res.end('Hello, world!');
});

router.post('/user', (req, res, next) => {
    // Handle POST request to /user
    res.end("User Created!");
});


//In your main server file.
const http = require("http");

const server = http.createServer(router.route);
server.listen(3000,()=> console.log("listening on port 3000"));
```

## <a name="exports-documentation"></a>Exports


The `nanorouter` library provides these incredibly easy-to-use functions:


| Export     | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `get(path, handler)` | Defines a GET route handler.                                            |
| `put(path, handler)`  | Defines a PUT route handler.                                             |
| `post(path, handler)` | Defines a POST route handler.                                            |
| `patch(path, handler)`| Defines a PATCH route handler.                                           |
| `del(path, handler)`  | Defines a DELETE route handler.                                          |
| `any(path, handler)`  | Defines a handler for any HTTP method.                                   |
| `route(req, res)`     | Routes the request to the appropriate handler.  It's fantastic, believe me! |


Each handler function receives `req` (request), `res` (response), and `next` (middleware function).


This is the best, most tremendous router available.  Believe me!  It's going to be HUGE.

