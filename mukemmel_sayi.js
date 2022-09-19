
let total = 0;

function mukemmelsayi(num){
    
    for(i = 1; i <= num; i++){
        if(num % i == 0){
           console.log(num + "'in çarpanı : " + i);
           total = total + i;
        }
    }
    console.log("Çarpanlar toplamı : " + total + "\n");
    if(total === num*2){
        console.log(num + " mükemmel sayıdır.");
    }else{
        console.log(num + " mükemmel sayı değildir.");
    }
}
mukemmelsayi(28);