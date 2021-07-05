const express = require('express');
const app = express()
const port = 3000;
const a_fazer = 'a fazer'

app.get('/afazer', function (req, res) {
  res.send(`Rota ativada com GET e recurso ${a_fazer}:
  valores de ${a_fazer} devem ser retornados`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
