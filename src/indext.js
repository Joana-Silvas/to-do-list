const express = require('express')
const app = express()
const port = 3000

const tarefaController = require("../src/controllers/tarefa-controller");

const usuarioController = require("../src/controllers/usuario-controller");

app.get('/', (req, res) => {
  res.send('Index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

tarefaController(app);
usuarioController(app);