const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.json({message:"Server is UP"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})