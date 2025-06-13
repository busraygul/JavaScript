// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     console.log(sonuc);
// }
// cube(3);
//Sonuc a buradan erişemem çünkü fonksiyonun içinde kaldı.

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc; //returndan sonraki kodlara erişilemez.
}
let donenDeger = cube(2);//return ı yakaladık.


function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}


console.log(donenDeger);

kareAl(donenDeger);
//cube de donenDegeri kareAlda çağırdık.

function yazdir(){
    console.log("Büşra");
    // void : geriye değer döndürmeyen metotlarda kullanılır. return yok.
}
yazdir();