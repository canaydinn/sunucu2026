
const router=require('express').Router();
const {kullanici_login,kullanici_ekle,kullanici_getir,satis_getir}=require("../controllers/controller")
router.post('/login',kullanici_login)
router.post('/register',kullanici_ekle)
router.get('/users',kullanici_getir)
router.get('/sales',satis_getir)
module.exports=router;
