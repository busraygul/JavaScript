let ad = prompt("İsminizi giriniz:");
let tc = prompt("Tc giriniz:")
kontrolEt(ad,tc);

function kontrolEt(ad,tc){
    if(ad!=""){
        if(tc.length ==11){
            console.log("İsim ve TC girildi.");
            alert("İsminiz: "+ad+"  TC: "+tc);
            alert("Kayıt Başarılı!");
    }else{
        alert("Lütfen TC nizi 11 karakterli giriniz!")
    }
    
}else{
    alert("Lütfen isminizi giriniz!");
}
}
