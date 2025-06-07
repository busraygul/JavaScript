let turkceDogru , turkceYanlis = 0;
let matDogru , matYanlis = 0;
let sosyalDogru , sosyalyanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let mesaj ="TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!\n1-Puan Hesapla\n2-Çıkış Yap";

let secim = prompt(mesaj);

switch(secim){

    case "1":

        okulPuani = Number(prompt("Okul Puanınızı Giriniz:"));

        turkceDogru= Number(prompt("Türkçe Doğru Sayısı:"));
        turkceYanlis= Number(prompt("Türkçe Yanlış Sayısı:"));

        matDogru= Number(prompt("Matematik Doğru Sayısı:"));
        matYanlis= Number(prompt("Matematik Yanlış Sayısı:"));

        sosyalDogru= Number(prompt("Sosyal Doğru Sayısı:"));
        sosyalyanlis= Number(prompt("Sosyal Yanlış Sayısı:"));

        fenDogru= Number(prompt("Fen Doğru Sayısı:"));
        fenYanlis= Number(prompt("Fen Yanlış Sayısı:"));

        let dogruSayisi = turkceDogru+matDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matYanlis+sosyalyanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);

        puan = (kalanDogruSayisi * 4) + 100 + okulPuani; //her soru 4 puan dedik. 100 puanı ösym veriyor.
        alert("TYT Puanınız: "+puan);

        break;

    case "2":
        alert("Uygulamadan Çıkış Yapıldı!");
        break;


    default:
        alert("Lütfen Geçerli Bir Sayı Giriniz!!");
        break;
    
}


