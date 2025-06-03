/*

-------SCOPE(KAPSAM)--------
->Global Scope: her yerden eişilebilir. Değişken süslü parantez dışarısında olmalı.
->Function Scope
->Block Scope
*/

var degiskenIsmi = 10; // Global Scope
console.log(degiskenIsmi);

var x = 5; // Global Scope olduğu için bu sayfa içerisindeki her döngüden de erişilebilir.

if(true){
console.log(x)
}
function method1(){
}
console.log(degiskenIsmi);
function method2(){
    var sayi = 10; // Function Scope
    console.log(x);
}
method2();

// console.log(sayi); 
// console.log(sayi); // Hata verir çünkü sayi değişkeni method2 içinde tanımlandı ve global scope'ta değil.

while(true){
    var sayi2 = 20; // Block Scope
}

