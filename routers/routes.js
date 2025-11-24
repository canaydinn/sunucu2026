const router=require('express').Router();
const {kullanici_login,kullanici_ekle}=require("../controllers/controller")
router.post('/login',kullanici_login)
router.post('/register',kullanici_ekle)
module.exports=router;