// 1 den 10'a kadar sayıları yazdıralım ve 8 e geldiğimizde döngüden çıkalım


//BREAK

let i = 1;
while(i<=10){
    console.log(i);
    if(i==8){
        break;
    }
    i++;
}

//CONTINUE

// 8 hariç 1'den 10'a kadar sayıları yazdırma

let j = 0;
while(j<=10){
    j++;
    if(j>10){
        break;
    }
    if(j==8){
        continue; //altında bulunan hiçbir kodu çalıştırma yani clg çalışmadığı için 8 yazılmıyor. döngü içerisinde.
    }
    console.log(j);
}
