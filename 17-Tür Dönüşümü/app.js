//STRING TO NUMBER

let a = 5;
let b = Number("10");

console.log(a+b);

let x = 8;
let y = parseInt("12"); //parseInt() fonksiyonu da kullanılabilir.

console.log(x+y);

//NUMBER TO STRING

let c = String(55);
let d = (50).toString(); // .toString() kullanarak da değiştirilebilir.

console.log(typeof c);
console.log(typeof d);


let e = Number("B");

console.log(e); //NaN uyarısı verir. Not a Number

//OBJECT TO STRING

let rakamlar = String([1,2,3,4]);

console.log(typeof rakamlar);
console.log(rakamlar);

let sayilar = Number([1,2,3,4]);
console.log(sayilar); //NaN çünkü array bir sayı değğildir. objedir.