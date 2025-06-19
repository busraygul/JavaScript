let metin = "Şu anda ders çalışıyorum.";

//let harf = prompt("Harf Giriniz: ");

// let sonuc = bul(harf);
// alert("Harf Sayısı: "+sonuc);

bul("a");
bul("e");
bul("s");

function bul(harf){
    let toplam = 0;
    for(let i = 0;i<metin.length; i++){
        if (metin.charAt(i).toLocaleLowerCase()===harf.toLocaleLowerCase()){//küçük büyük harf farkını çözdük.
            toplam+=1;
        }
    }
    console.log("Harf Sayısı: "+toplam);
    //return toplam;
}