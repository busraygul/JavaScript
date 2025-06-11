let sayi = Number(prompt("Bir sayı giriniz: "));
let sonuc = true;

for(let bolen=2; bolen<Math.floor(sayi/2);bolen++){

    if(sayi%bolen==0){
        sonuc = false; //Asal değildir.
        break;
    }
}
if(sayi==0 || sayi == 1){
    sonuc=false;
}
if(sonuc){ //true ysa buna girer.
    alert(sayi +" asaldır.");
}else{
    alert(sayi+" asal değildir.");
}