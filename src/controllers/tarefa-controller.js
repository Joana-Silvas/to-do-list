module.exports = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('Rota da Tarefa')
    })
};
