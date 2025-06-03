// == tür aynıysa true
// === tür ve değer aynıysa true

console.log(5==4);

console.log(3=="3"); // true, çünkü == operatörü tür dönüşümü yapar.
// === hem tipleri hem de değerleri karşılaştırır.
console.log(3==="3"); // false, çünkü === operatörü tür dönüşümü yapmaz. 

let sayi = 15;
sayi+= 2;

console.log(sayi);

sayi-= 2;
console.log(sayi);

sayi*= 4;
console.log(sayi);

sayi/= 3;
console.log(sayi);

sayi%= 3;
console.log(sayi);

sayi**= 4;
console.log(sayi);