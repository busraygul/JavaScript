//Var - Let - Const

// var/let/const degsikenIsmi = degiskenDegeri;

//let sayi = 10;

//var :function scope - ram bellekte çok fazla yer kaplar.

// let ve const block scope özelliğine sahiptir.

function selamVer() {
    var selam = "Selam";
    if (true) {
        let b = "10";
        console.log(b);
    }
    console.log(selam);
}
selamVer();

// var a = 10;
// var b = 20;
// console.log(a); // sonradan değiştirilebilir.

if (true) {
    let a = 10;
    let b = 20;
    console.log(a); // sonradan değiştirilemez.
    
}

//LET ve CONST arasındaki fark
// let : değiştirilebilir.
// const : değiştirilemez.

const user ={
    username: "busra",
    password: "12345"
}
user.username = "Büşra"; // bu şekilde değiştirilebilir.
// user = {}; // bu şekilde değiştirilemez.
console.log(user);