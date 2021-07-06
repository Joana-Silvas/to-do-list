const express = require('express')
const app = express()
const port = 3000


const tarefaController = require("../src/controllers/tarefa-controller");
tarefaController(app);

const usuarioController = require("../src/controllers/usuario-controller");
usuarioController(app);


app.get('/', (req, res) => {
  res.send('Index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
