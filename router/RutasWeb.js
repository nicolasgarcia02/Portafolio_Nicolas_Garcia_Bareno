const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
})

router.get('/acerca', (req, res) => {
    res.render("acerca")
})

router.get('/contacto', (req, res) => {
    res.render("contacto")
})

router.get('/equipo', (req, res) => {
    res.render("equipo")
})

router.get('/habilidades', (req, res) => {
    res.render("habilidades")
})

router.get('/proyecto', (req, res) => {
    res.render("proyecto")
})

module.exports = router;