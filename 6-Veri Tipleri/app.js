/*
?Veri Tipleri
String
number
boolean
null
undefined
object
Function
*/

//?String

let isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

//?Number

let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1);

let a = "1"; 
let b = "2";
console.log(a+b); // "12" (string olarak birleştirme)

let stringDegisken 
= "Yaşınız: ";
let yas = 22;
console.log(stringDegisken + yas); // "Yaşınız: 25" (string ile sayının birleştirilmesi)

//?Boolean
console.log(5>2); // true
console.log(5<2); // false

let x = 3;
let y = 12;

let sonuc = x+y;
console.log(sonuc>12);

//?Null
let sayi = null;

//?Undefined
let number;
console.log(typeof number); // undefined


//?Object
let kisi = {
    ad: "Büşra",
    yas: 22,
    meslek: "Mühendis"
}; 
console.log(typeof kisi); // object

let rakamlar = [1, 2, 3, 4, 5];
console.log(typeof rakamlar); // object (JavaScript'te diziler de birer nesnedir)

//?Function
let func = function() {
    console.log("Merhaba Dünya!");
}
console.log(typeof func); // function
func(); // Fonksiyon çağrısı