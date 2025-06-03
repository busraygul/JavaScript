// Diyalo Kutuları
// Alert - Prompt - Confirm

alert("Nasılsın?");

let isim = prompt("Adınız nedir?");
console.log("İsminiz: "+ isim);
//promptla değer aldık let isim diyerek girdiğimiz veriyi yakaladık.
let yas = prompt("Yaşınız nedir?");
console.log("Yaşınız: "+ yas);

console.log(typeof isim); // string
console.log(typeof yas); // string
// prompt ile aldığımız değerler her zaman string olarak gelir.

let sonuc = confirm("Devam etmek istiyor musunuz?");
// confirm ile kullanıcıya onay sorusu soruyoruz.
console.log(sonuc); 