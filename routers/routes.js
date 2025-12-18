<<<<<<< HEAD
const router=require("express").Router()
const {login,register}=require("../controllers/controller")
router.post("/login",login)
router.post("/register",register)
module.exports=router
=======
const router=require('express').Router();
const {kullanici_login,kullanici_ekle,kullanici_getir,satis_getir}=require("../controllers/controller")
router.post('/login',kullanici_login)
router.post('/register',kullanici_ekle)
<<<<<<< HEAD
router.get('/users',kullanici_getir)
router.get('/sales',satis_getir)
module.exports=router;
=======
module.exports=router;
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
>>>>>>> af5d118495bd47a5ae52b181f854ba30a88b3c32
