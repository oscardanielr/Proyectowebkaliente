//defino las rutas de mi aplicacion 
const express= require('express');
const router= express.Router();

const passport = require('passport')
const { isNotLoggedIn  ,isLoggedIn } = require('../lib/auth');

router.get('/admon-dd-proces-add-to11-signup',isNotLoggedIn, (req, res) => {
    res.render('auth/signup')
});
router.post('/signup',isNotLoggedIn, passport.authenticate('local.signup',{
       successRedirect: '/profile',
       failureRedirect: '/signup',
       failureFlash: true
}));

router.get('/signin',isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin',{
        successRedirect: '/profile',
        failureRedirect: '/error',
        failureFlash: true
    })(req,res, next);
});

router.get('/profile', isLoggedIn,(req, res) => {
    res.render('profile');
});
router.get('/logout', async (req, res) =>{
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;