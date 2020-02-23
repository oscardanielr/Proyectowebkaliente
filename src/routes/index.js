//defino las rutas de mi aplicacion 
const express= require('express');
const router= express.Router();

const pool = require('../database');

router.get('/',async (req,res) =>{
    const artistas = await pool.query('SELECT * FROM artistas ');
    res.render('index' , {artistas});
}); 
router.get('/error', (req,res) =>{
    res.render('error');
});
router.get('/biografia', async (req,res) =>{
    const biografia = await pool.query('SELECT * FROM biografia ');
    const artistas = await pool.query('SELECT * FROM artistas ');
    res.render('biografia', {biografia, artistas});
}); 
router.get('/album', async (req,res) =>{
    const album = await pool.query('SELECT * FROM album ');
    res.render('album',{album});
}); 
router.get('/eventos', async (req,res) =>{
    const eventos = await pool.query('SELECT * FROM evento ');
    res.render('eventos', {eventos});
}); 
router.get('/galeria', async (req,res) =>{
    const galeria = await pool.query('SELECT * FROM galeria ');
    console.log(galeria)
    res.render('galeria', {galeria});
}); 
router.get('/contactos', async (req,res) =>{
    const contactos = await pool.query('SELECT * FROM contactanos ');
    res.render('contactos', {contactos});
});
router.get('/add', (req,res) =>{
    res.render('add');
});



module.exports = router;