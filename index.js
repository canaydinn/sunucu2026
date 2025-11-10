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
*/
/* function addToCart(products){
    console.log(products)
}

let products=[{productName:"Telefon",quantity:2,unitPrice:5000}
,{productName:"Bilgisayar",quantity:1,unitPrice:15000}
,{productName:"Bardak",quantity:3,unitPrice:20}]

addToCart(products)


//Spread Operatörü
let numbers=[30,10,500,600,1200,120]

console.log(Math.min(...numbers))

///Distracting (Yayma)

let regions=["İç Anadolu","Marmara","Karadeniz","Ege"]
console.log(regions[0])
console.log(regions[1])
console.log(regions[2])



let [icAnadolu,marmara,karadeniz]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"}
]

console.log(icAnadolu.population)

 */

//ES 6 ve sonrası için
/* 


//Klasik Fonksiyon Tanımı
function addToCart(products){
    console.log(products)
}

//Arrow Function ES6 ve sonrası için parametreli Arrow Function
const addToCart2=(products)=>{
    console.log(products)
}
//Parametresiz Arrow Function
addToCart=>console.log("Sepete Eklendi")

const yas=40
let durum=""
//if-else klasik kullanımı
if(yas==50){
durum="Yaşınız 40'tır"
}else{
durum="Yaşınız 40 değildir"
}
console.log(durum)


//Ternary Kullanımı ES6 ve sonrası için
durum= yas==40 ? "Yaşınız 40'tır" : "Yaşınız 40 değildir"
console.log(durum)


//üç koşularda Ternary Kullanımı
let kategori= yas<18 ? "Genç" : yas>=18 && yas<65 ? "Yetişkin" : "Yaşlı"
console.log(kategori)
//Diziler Array
//Filter Kullanımı ES6 ve sonrası için
const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=numbers.filter(number=>number%2==0)
console.log(evenNumbers)

//Find Kullanımı ES6 ve sonrası için
const foundNumber=numbers.find(number=>number>5)
console.log(foundNumber)

 */
//Every Kullanımı ES6 ve sonrası için
numbers=[1,2,3,4,5,6,7,8,9,10];
const allPositive=numbers.every(number=>number%2===0)
console.log(allPositive)

//Some Kullanımı ES6 ve sonrası için
const anyEven=numbers.some(number=>number%2===0)
console.log(anyEven)



//Map Kullanımı ES6 ve sonrası için
const square=numbers.map(number=>number*100)
console.log(square)


//Reduce Kullanımı ES6 ve sonrası için
const sum=numbers.reduce((accumulator,number)=>accumulator+number,0)
console.log(sum)



//Map Reduce Kullanımı ES6 ve sonrası için
let cart=[
    {id:1,productName:"Telefon",quantity:2,unitPrice:5000},
    {id:2,productName:"Bilgisayar",quantity:1,unitPrice:15000},
    {id:3,productName:"Bardak",quantity:3,unitPrice:20}
]
console.log("<ul>")
//Sepetteki ürünleri göstermek için
cart.map(product=>{
    console.log("<li>"+product.productName +":"+product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

//Toplam fiyatı bulmak için
let total=cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log(total)


//Objeler
const person={}
person.name="Can"
person.lastname="Uzun"
person.age=25  


const car={
    brand:"BMW",
    model:"X5",
    year:2020,
    getir:()=>{
        return this.brand + " " + this.model + " " + this.year
    }
}
console.log(car.brand)
console.log(car["model"])





//For Döngüsü
for (let i=0;i<10;i++){
    console.log(i)
}


//Foreach Döngüsü
let dizi=["Elma","Armut","Muz"] 
dizi.forEach(function(item){
    console.log(item)
})
//ES6 ve sonrası için Arrow Function ile
dizi.forEach(item=>console.log(item))



//Hata Denetimi Try Catch


try{
    const result=10/0
    console.log(result)
}
catch(error){
    console.log("Bir hata oluştu"+error.message)
}
finally{
    console.log("İşlem tamamlandı")
}

function bolmeİslemi(x,y){
    if(y===0){
        throw new Error("Bölen sıfır olamaz")
    }
}
try{
    const sonuc=bolmeİslemi(10,0)
    console.log("Sonuç:"+sonuc)
}
catch(error){
    console.log("Hata:"+error.message)
}