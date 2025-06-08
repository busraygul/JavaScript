//1 den 10 a kadar yazdırma

let sayac = 1;
while(sayac<=10){
    console.log(sayac);

    sayac++;
}

//1 den 10 a kadar tek ve çiftleri yazdırma

let tek = 1;
while(tek<=10){
    if(tek%2==1){
        console.log(tek);   
    }
    tek++;
}
let cift = 0;
while(cift<=10){
    if(cift%2==0){
        console.log(cift);
    }

    cift++;
}

let a = 1;

while(true){
    console.log(a);
    if(a==7){
        break;
    }
    a++;
}
    
