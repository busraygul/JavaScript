function yazdir(isim,soyisim){
    //debugger;
    console.log(isim + " "+soyisim );
}
//debugger;
yazdir("Büşra","Aygül");

yazdir("Fatih","Oruç");

function cube(sayi){
    console.log(sayi*sayi*sayi);
}
cube(3);

let yas = Number(prompt("Yaşnızı Giriniz: "));

function kontrolEt(yas){
    if(yas>=18){
        alert("Ehliyet Alabilirsiniz!");
    }else{
        alert("Ehliyet Alamazsınız!")
    }
}

kontrolEt(yas);