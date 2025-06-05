let kullaniciDegeri =prompt("1-Dizel \r\n2-Benzin \r\n3-LPG \r\nYakıt tipinizi seçiniz: ") ;

let ucret;
let dizel = 24.53
let benzin = 22.25;
let LPG = 11.1;
if(kullaniciDegeri != 1 && kullaniciDegeri !=2 && kullaniciDegeri != 3){
    alert("Geçerli bir yakıt türü giriniz!");   
} 
else {
    let yakitLitresi = prompt("Kaç litre yüklenecek yazınız: ");
    let bakiye = Number(prompt("Bakiyenizi Giriniz: "));

    if (kullaniciDegeri==1){
    ucret= yakitLitresi * dizel;
    alert("Ödenecek Tutar: "+ucret);
    if(bakiye>=ucret){
        alert("Bakiye Yeterli.")
    }else{
        alert("Bakiye Yetersiz. Eksik Tutar: " + (ucret-bakiye));
    }
}else if(kullaniciDegeri==2){
    ucret= yakitLitresi * benzin;
    alert("Ödenecek Tutar: "+ucret);
    if(bakiye>=ucret){
        alert("Bakiye Yeterli.")
    }else{
        alert("Bakiye Yetersiz. Eksik Tutar: "+ (ucret-bakiye));
    }
}else if(kullaniciDegeri==3){
    ucret= yakitLitresi * LPG;
    alert("Ödenecek Tutar: "+ucret);
    if(bakiye>=ucret){
        alert("Bakiye Yeterli.")
    }else{
        alert("Bakiye Yetersiz. Eksik Tutar: "+ (ucret-bakiye));
    }
}

}





