const http = require('http')  
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
<<<<<<< HEAD
  res.end('<h1>Hello This is Group 12</h1>')
=======
  res.end('<h1>Hello Everyone, Group 12</h1>')
>>>>>>> eda486e2c6e89dd1cacebe36b035084e77ef4134
})

server.listen(port,() => {
  console.log(`Server running at port `+port)
})
