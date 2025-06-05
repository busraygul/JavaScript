let kilo = Number(prompt("Kilonuzu giriniz: "));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz. "));

let sonuc = kilo/(boy*2);

if (sonuc<=18.5){
    alert("İdeal kilonun altındasınız! İndeksiniz: "+sonuc)
}else if(18.5<sonuc && sonuc<=24.9){
    alert("İdeal kilodasınız! İndeksiniz: "+sonuc)
}else if(24.9<sonuc && sonuc<=29.9){
    alert("İdeal kilonun üstündesiniz! İndeksiniz: "+sonuc)
}
else if(29.9<sonuc && sonuc<=39.9){
    alert("İdeal kilonun çok üstündesiniz! İndeksiniz: "+sonuc)
}else{
    alert("Obezsiniz!! Diyete başlayın. İndeksiniz: " +sonuc)
}