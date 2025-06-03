/*
let not = 65;

if(not>50){
    console.log("Geçtiniz! Notunuz: "+ not);
}
else{
    console.log("Kaldınız! Notunuz: " + not);
}
let yas = Number(prompt("Yaşınızı giriniz: ")); // Kullanıcıdan yaş alıyoruz ve sayıya çeviriyoruz.
let para = Number(prompt("Para miktarınızı giriniz: "));
if(yas>=18 && para>=3000){
    alert("Ehliyet alabilirsiniz.");
}else{
    alert("Ehliyet alamazsınız.");
}

*/

// ------------DERS ORTALAMASI BULMA------------
//vize %30  vize2 %30 final %40   &0 üzeri geçer.

let vize1 = Number(prompt("1. vize notunuzu giriniz: "))
let vize2 = Number(prompt("2. vize notunuzu giriniz: "))
let final = Number(prompt("Final notunuzu giriniz: "))
let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);
console.log("Ortalamanız: " + ortalama);

if(ortalama >= 60){
    alert("Tebrikler, geçtiniz! Notunuz: " + ortalama);
}else{
    alert("Üzgünüz, kaldınız! Notunuz: " + ortalama);
}
