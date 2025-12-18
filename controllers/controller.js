<<<<<<< HEAD
const db=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
=======
<<<<<<< HEAD
const dbConn=require("../db/mysql_connect")
const login=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}
const register=async(req,res)=>{
    try{
        const ad_soyad=req.body.ad_soyad
        const eposta=req.body.eposta
        const sifre=req.body.sifre
        const yetki_id=req.body.yetki_id
        const tarih=req.body.tarih
        const [existingUser]=await dbConn.query("SELECT * FROM users Where eposta=?",[eposta])
        if(existingUser.length>0){
            return res.json({
                success:false,
                data:null,
                message:"Kayıt Mevcut"
            })
        }
        const [insertResult]=await dbConn.query("INSERT INTO users (ad_soyad,eposta,sifre,yetki_id,tarih) VALUES (?,?,?,?,?)",[ad_soyad,eposta,sifre,yetki_id,tarih])
        return res.json({
            success:true,
            data:req.body,
            message:"Kayıt Gerçekleşti"
        })
    }catch(error){
        console.log("veritabanı hatası",error)
        return res.json({
            success:false,
            data:null,
            message:"Bir hata oluştu"
        })
    }
}

module.exports={login,register}
=======
>>>>>>> af5d118495bd47a5ae52b181f854ba30a88b3c32
const kullanici_login=async(req,res)=>{
    const [existingUser]=await db.query("SELECT * FROM musteriler WHERE kullanici_adi=? and sifre=?", [kullanici_adi,sifre]);
   if(error,results){
   }
}
const kullanici_ekle=async(req,res)=>{
    try{
        const adi=req.body.adi;
        const soyadi=req.body.soyadi;
        const hesap_no=req.body.hesap_no;
        const kullanici_adi=req.body.kullanici_adi;
        const sifre=await bcrypt.hash(req.body.sifre,10);
        const [existingUser]=await db.query("SELECT * FROM musteriler WHERE kullanici_adi=?", [kullanici_adi]);
        if(existingUser.length>0){
            return res.status(400).json({error:"Bu kullanıcı adı zaten alınmış"})
        }
         const [insertResult]=await db.query("INSERT INTO musteriler (adi, soyadi, hesap_no, kullanici_adi, sifre) VALUES (?, ?, ?, ?, ?)", [adi, soyadi, hesap_no, kullanici_adi, sifre]);
        return res.status(201).json({message:"Kullanıcı başarıyla eklendi", kullanici_id:insertResult.insertId});
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})

    }
}

<<<<<<< HEAD

const kullanici_getir=async(req,res)=>{
    try{
        const [rows]=await db.query("SELECT * FROM musteriler");    
        console.log(rows);
        return res.status(200).json(rows);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})
    }
}

const satis_getir=async(req,res)=>{
    try{
        const [rows]=await db.query("SELECT sales_date,sales_amount FROM sales_data"); 
        console.log(rows);
        return res.status(200).json(rows);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})
    }
} 
module.exports={kullanici_login,kullanici_ekle,kullanici_getir,satis_getir };
=======
module.exports={kullanici_login,kullanici_ekle};
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
>>>>>>> af5d118495bd47a5ae52b181f854ba30a88b3c32
