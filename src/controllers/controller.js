//defino las rutas de mi aplicacion 

const pool = require('../database');

 const index = async (req,res) =>{
    const artistas = await pool.query('SELECT * FROM artistas ');
    res.render('index' , {artistas});
};

 const error = (req,res) =>{
    res.render('error');
};

 const biografia = async (req,res) =>{
    const biografia = await pool.query('SELECT * FROM biografia ');
    const artistas = await pool.query('SELECT * FROM artistas ');
    res.render('biografia', {biografia, artistas});
}; 

const album = async (req,res) =>{
    const album = await pool.query('SELECT * FROM album ');
    res.render('album',{album});
}; 


const eventos = async (req,res) =>{
    const eventos = await pool.query('SELECT * FROM evento ');
    res.render('eventos', {eventos});
}; 


const galeria = async (req,res) =>{
    const galeria = await pool.query('SELECT * FROM galeria ');
    console.log(galeria)
    res.render('galeria', {galeria});
}; 


const contactos = async (req,res) =>{
    const contactos = await pool.query('SELECT * FROM contactanos ');
    res.render('contactos', {contactos});
};

const add = (req,res) =>{
    res.render('add');
};



module.exports = { index , error, biografia, album, eventos, galeria, contactos, add};