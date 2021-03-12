const express = require('express')
const validateBody = require('./middleware/validate.mw')
const UserController = require('./controllers/user.controller')

const PORT = 3000
const app = express() // Создание сервера

const bodyParser = express.json()

/* ROUTING: METHOD PATH */
app.post('/', bodyParser, validateBody, UserController.createUser)

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})
