//1 den 10 a kadar yazdırma

for(let i = 1; i<=10;i++){
    console.log(i);
}

//1 den 10 a kadar çiftleri yazdırma

for(let j = 0;j<=10; j+=2){
    console.log(j);
}

//1 den 10 a kadar tekleritleri yazdırma

for(let k = 1;k<=10; k+=2){
    console.log(k);
}

// Tekse Büşra Çiftse Aygül yazdırmak istedim.
for (let a = 1; a<=10; a++ ){
    if(a%2==1){
        console.log("Büşra");
    }else{
        console.log("Aygül");
    }
}


//50 den 1 e kadar gitsin ve en son hepsi toplansın

let toplam = 0;

for(let sayi=50; sayi>=1;sayi--){
    console.log(sayi);
    toplam+=sayi;
}
console.log("Toplamı: "+toplam);