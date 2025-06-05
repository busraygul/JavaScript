let bakiye = 1000;
let metin = prompt("1-Bakiye Görüntüleme \r\n2-Para Çekme \r\n3-Para Yatırma\r\n4-Çıkış\r\nLütfen bir değer seçiniz!");

let deger = prompt(metin);

switch(deger){
    case "1": 
        alert("Bakiyeniz: "+bakiye);
        alert(metin);
    break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekilecek  tutarı giriniz."));
        bakiye = bakiye - cekilecekTutar;

    break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz."));
        bakiye = bakiye + yatirilacakTutar;
    break;

    case "4":
        alert("Çıkış yapıldı!");
}