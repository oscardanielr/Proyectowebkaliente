//defino las rutas de mi aplicacion 
const express= require('express');
const router= express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add',isLoggedIn, async (req,res) =>{
    const admon = await pool.query('SELECT * FROM  admon');
    const mensajes = await pool.query('SELECT * FROM mensajes ');
    const album = await pool.query('SELECT * FROM album ');
    const biografia = await pool.query('SELECT * FROM biografia ');
    const contactanos = await pool.query('SELECT * FROM contactanos ');
    const evento = await pool.query('SELECT * FROM evento ');
    const galeria = await pool.query('SELECT * FROM galeria ');
    const historia = await pool.query('SELECT * FROM historia ');
    console.log(admon);
    res.render('processes/add',{admon, mensajes, album, biografia,
                      contactanos, evento, galeria, historia});
});

router.get('/biografia', (req, res) => {
    res.render('processes/biografia');
});

router.post('/biografia', async (req,res) => {
    const { origen, genero, email, parrafo_1, parrafo_2 } = req.body;
    const newBiografia = {
        origen,
        genero,
        email,
        parrafo_1,
        parrafo_2,
        admon_id: req.user.id
    };
    await pool.query('INSERT INTO biografia set?', [newBiografia]);
    res.redirect('/route/add');
    console.log(newBiografia);
    console.log(req.body);
});

router.get('/delete-biografia/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
   await pool.query('DELETE FROM biografia WHERE ID =?', [id]);
   res.redirect('/route/add');
});

router.get('/biografia-edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM biografia WHERE id =?', [id]);
    res.render('/route/add', {link: links[0]});
});

router.post('/biografia-edit/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
    const { origen, genero, email, parrafo_1, parrafo_2 } = req.body;
    const newBiografia = {
        origen,
        genero,
        email,
        parrafo_1,
        parrafo_2,
        admon_id: req.user.id
    };
    await pool.query('UPDATE  biografia set ? WHERE id = ?', [newBiografia, id]);
    req.flash('success', 'ENLACE GUARDADO SATISFACTORIAMENTE ');
    res.redirect('/route/add');     
});

router.get('/album', (req, res) => {
    res.render('processes/album');
});

router.post('/album',  async (req, res) =>{
    const { url, nombre, description } = req.body;
    const newAlbum = {
        url,
        nombre,
        description,
        admon_id: req.user.id
    };
    await pool.query('INSERT INTO album set?', [newAlbum]);
    res.redirect('/route/add');
});

router.get('/delete-album/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
   await pool.query('DELETE FROM album WHERE ID =?', [id]);
   req.flash('success', 'ENLACE ELIMINADO SATISFACTORIAMENTE ');
   res.redirect('/route/add');
});

router.get('/eventos', (req, res) => {
    res.render('processes/eventos');
});

router.post('/eventos', async (req, res) => {
    const { titulo, descripcion, url } = req.body;
    const newEvento = {
        titulo,
        descripcion,
        url,
        admon_id: req.user.id
    };
    await pool.query('INSERT INTO evento set?', [newEvento]);
    res.redirect('/route/add');
});

router.get('galeria', async (req, res) => {
    res.render('/route/add');
});

router.post('/galeria', async (req, res) => {
    const { titulo, url } = req.body;
    const newGaleria = {
        titulo,
        url,
        admon_id: req.user.id
    };
    await pool.query('INSERT INTO galeria set?', [newGaleria]);
    res.redirect('/route/add');
});


router.get('/contactos', (req, res) => {
    res.render('processes/contactos');
});


router.post('/contactos', async (req, res) => {
    const {direccion, telefono_1, telefono_2} = req.body;
    const newContacto ={
        direccion,
        telefono_1,
        telefono_2,
        admon_id: req.user.id
    };
    console.log(newContacto)
    await pool.query('INSERT INTO contactanos set?', [newContacto]);
    res.redirect('/route/add');

});

router.get('/delete-contactanos/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
   await pool.query('DELETE FROM contactanos WHERE ID =?', [id]);
   res.redirect('/route/add');
});

router.get('/contactos-edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM contactanos WHERE id =?', [id]);
    res.render('/route/add', {link: links[0]});
});

router.post('/contactos-edit/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
    const {direccion, telefono_1, telefono_2} = req.body;
    const newContacto ={
        direccion,
        telefono_1,
        telefono_2,
        admon_id: req.user.id
    };
    await pool.query('UPDATE  contactanos set ? WHERE id = ?', [newContacto, id]);
    req.flash('success', 'ENLACE GUARDADO SATISFACTORIAMENTE ');
    res.redirect('/route/add');

});


router.post('/mensajes', async (req, res) => {
    const {nombre, email, asunto, mensaje} = req.body;
    const newMensaje ={
        nombre,
        email,
        asunto,
        mensaje       
    };
    await pool.query('INSERT INTO mensajes set?', [newMensaje]);
    res.redirect('/contactos');

});

router.post('/historia', async (req, res) => {
    const {titulo, descripcion} = req.body;
    const newHistoria ={
        titulo,
        descripcion,
        admon_id: req.user.id   
    };
    await pool.query('INSERT INTO historia set?', [newHistoria]);
    res.redirect('/route/add');

});


router.get('/delete-historia/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
   await pool.query('DELETE FROM historia WHERE ID =?', [id]);
   req.flash('success', 'ENLACE ELIMINADO SATISFACTORIAMENTE ');
   res.redirect('/route/add');
});

router.get('/historia-edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM historia WHERE id =?', [id]);
    res.render('/route/add', {link: links[0]});
});

router.post('/historia-edit/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
    const {titulo, descripcion} = req.body;
    const newHistoria ={
        titulo,
        descripcion,
        admon_id: req.user.id   
    };
    await pool.query('UPDATE  historia set ? WHERE id = ?', [newHistoria, id]);
    req.flash('success', 'ENLACE GUARDADO SATISFACTORIAMENTE ');
    res.redirect('/route/add');
});


router.post('/artistas',isLoggedIn,async(req,res) => {
    const { url, nombre, email, descripcion } = req.body;
    const newArtista = {
        url,
        nombre,
        email,
        descripcion,
        admon_id: req.user.id
    };
    await pool.query('INSERT INTO artistas set?', [newArtista]);
    res.redirect('/route/add');

});





module.exports = router;