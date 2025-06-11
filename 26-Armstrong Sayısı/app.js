//153 = 1*1*1 + 5*5*5 + 3*3*3 
// rakamlarının küplerinin toplamı kendisini veren sayıya denir.

let sayi = prompt("Bir sayı giriniz: ");
let toplam = 0;
for(let i = 0; i<sayi.length;i++){
    //0-1-2 için dönecek 153 sayısı için yani kaç basamaklıysa o kadar döner.
    let rakam= sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("Armstrong Sayısıdır!");
}else{
    alert("Armstrong Sayısı Değildir!");

}