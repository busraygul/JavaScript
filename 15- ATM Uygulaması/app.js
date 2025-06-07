let bakiye = 1000;
let metin = prompt("1-Bakiye Görüntüleme \r\n2-Para Çekme \r\n3-Para Yatırma\r\n4-Çıkış\r\nLütfen bir değer seçiniz!");

let deger = metin;

switch(deger){
    case "1": 
        alert("Bakiyeniz: "+bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekilecek  tutarı giriniz."));
        if(cekilecekTutar<bakiye){
            //başarılı
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye: "+bakiye);
        }else{
            alert("Bakiyenizden fazla para çekemezsiniz!\r\nBakiyeniz: "+bakiye + " "+ "Çekilecek Tutar: "+cekilecekTutar);
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz:"));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel Bakiye: "+bakiye);
        break;

    case "4":
        alert("Çıkış yapıldı!");
        break;
    
    default:
        alert("Lütfen 1 ile 4 arasında bir değer giriniz!");
        break;
}
