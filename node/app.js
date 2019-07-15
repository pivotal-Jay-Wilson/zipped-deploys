const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>Node</title>
  </head>
  <body>
  
  <h1>Node PFC Zip App</h1>
  <p>Testing the zip option.</p>
  
  </body>
  </html>  
  `)
})
 
app.listen(process.env.PORT || 3000);