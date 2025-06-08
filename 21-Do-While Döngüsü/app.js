//1 den 10 a kadar yazdırma

let sayac = 1;
do{
    console.log(sayac);
    sayac++;
}while(sayac<=10);

let yas = 22;

do{
    console.log("Ehliyet Alabilirsiniz!"); //koşul sağlanmadığı halde çıktıyı yazdırdı. Do-While da en az bir kere döngü çalışır.
}while(yas>=25);

//1 den 20 ye kadar olan tek sayıların toplamını bulma

let sayi = 1;
let toplam = 0;
do{
    if(sayi%2==1){
        toplam+=sayi;
    }
    sayi++;
}while(sayi<=20);
console.log(toplam);

