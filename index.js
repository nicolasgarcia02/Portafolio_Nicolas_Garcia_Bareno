const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', require('./router/RutasWeb'));
app.use('/index', require('./router/index'));

app.use('/acerca', require('./router/RutasWeb'));
app.use('/acerca', require('./router/acerca'));

app.use('/contacto', require('./router/RutasWeb'));
app.use('/contacto', require('./router/contacto'));

app.use('/equipo', require('./router/RutasWeb'));
app.use('/equipo', require('./router/equipo'));

app.use('/habilidades', require('./router/RutasWeb'));
app.use('/habilidades', require('./router/habilidades'));

app.use('/proyecto', require('./router/RutasWeb'));
app.use('/proyecto', require('./router/proyecto'));

app.use((req, res, next) => {
    res.status(404).render('error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})