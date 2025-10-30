//Değişken Tanımı var let ve const
/*
ECMASCRIPT 6 ve sonrası için
*/
/* 
var adi="Can";
//DEĞİŞKEN
let yas=20;
//sabit değişken
const adres="İzmir";

//ECMASCRIPT 6 Öncesi
function topla(x,y){
    return x+y
}

//ECMASCRIPT 6 Sonrası
//Arrow Function

const add=(x,y)=>x+y;
let x=10
if(x==10){
    console.log("X 10'a eşittir")
}

let total=0
for(let i=0;i<10;i++){
    total+=i
}

//var ile let arasındaki farklar
//var functipon scope - let ise block scope özelliğine sahiptir. 

function test(){
    if(true){
        var degisken="Merhaba"
    }
    if(true){
        console.log(degisken)
    }
}
test() */

/* //Tekrar Tanımlama Özelliği
var adi="Can";
var adi="Ahmet";

 let yas=20;
let yas=25;

var soyadi="Uzun"
soyadi="Aydın"

let adres="İzmir"
adres="İstanbul" */

//Hoisting
/* adi="Can"
console.log(adi)
  */

//Atama işlemleri immutable (Değiştirilemez)
/* let adi="Can"
const adres="İzmir"

adi="Ahmet"
adres="İstanbul" */

//Rest Operatörü
//Traditional
/* function adda(){
    let total=0
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total
}
console.log(add(1,2,3,4,5,6)) */
//Rest 
/* const add=(...args)=>{
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i]
    }
    return total;
}
console.log(add(1,2,3,4,5,6)) */

/* 
function addToCart(urun_adi,adet,fiyat){

}

addToCart("Elma",2,10)
addToCart("Armut",5,35)
addToCart("Limon",8,65)
let urunler=[{
    urunadi:"Elma",
    adet:2,
    fiyat:10
},{
    urunadi:"Armut",
    adet:5,
    fiyat:35
},{
    urunadi:"Limon",
    adet:8,
    fiyat:65
}] */

/* function addToCartNew(urunler){
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)
}
addToCartNew(urunler[0]) */


//Distracting İşlemi
//let bolgeler=["İç Anadolu","Marmara","Karadeniz"]
//console.log(bolgeler[2])
//let [urun_adi,adet,fiyat]=["Limon",3,20]

//console.log(urun_adi)

 
let [elma,armut,limon]=[
    {urun_adi:"Elma",adet:10,fiyat:100},
    {urun_adi:"Armut",adet:5,fiyat:300},
    {urun_adi:"Limon",adet:50,fiyat:10},
]
console.log(armut.urun_adi)


//filter

const sayilar=[1,2,3,4,5,6,7,8,9,10]

const teksayilar=sayilar.filter(sayi=>sayi%2===0);
console.log(teksayilar)


//Find


const numbers=[1,2,3,4,5,6,7,8,9,10]

const ciftsayilar=numbers.find(function(sayi){
    return sayi%2===0;
}
);
console.log(ciftsayilar)



//map fonksiyonu

const num=[1,2,3,4,5,6]

const katSayi=num.map(num=>num*2)

console.log(katSayi)


//reduce fonksiyonu

const nu=[1,2,3,4,5,6]

const toplam=nu.reduce((acc,curr)=>acc+curr,0)

console.log(toplam)


//forEach fonksiyonu

const say=[1,2,3,4,5,6]
say.forEach(say=>{
    console.log(say)
})

//Hata denetimi

try{
    const result=10/0
    console.log(result)
}
catch(error){
console.log("Hata:"+error.message)
}
finally{
    console.log("İşlem Tamamlandı")
}
//Thro Hata Yakalama
function bolmeİslem(x,y){
    if(y===0){
        throw new Error("Sıfıra Bölme Hatası")
    }
    return x/y
}
try{
    const sonuc=bolmeİslemi(10,0)
    console.log("Sonuc",sonuc)
}
catch(error){
    console.log("Hata Yakalandı"+error.message)
}









