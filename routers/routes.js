<<<<<<< HEAD
const router=require("express").Router()
const {login,register}=require("../controllers/controller")
router.post("/login",login)
router.post("/register",register)
module.exports=router
=======
const router=require('express').Router();
const {kullanici_login,kullanici_ekle}=require("../controllers/controller")
router.post('/login',kullanici_login)
router.post('/register',kullanici_ekle)
module.exports=router;
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
