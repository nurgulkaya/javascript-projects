
let total1 = 0, total2 = 0;

function arkadassayi(num1, num2){
    
    for(i = 1; i < num1; i++){
        if(num1 % i == 0){
           console.log(num1 + "'in çarpanı : " + i);
           total1 = total1 + i;
        }
    }
    console.log("\n");
    for(j = 1; j < num2; j++){
        if(num2 % j == 0){
           console.log(num2 + "'in çarpanı : " + j);
           total2 = total2 + j;
        }
    }
    console.log("1. sayı ve 2. sayının çarpanlarının toplamı: " + total1 + " ve " + total2 + "\n");

    if(num1 === total2 && num2 === total1){
      console.log(num1 + " ve " + num2 + " arkadaş sayıdır.");
    }else{
        console.log(num1 + " ve " + num2 + " arkadaş sayı değildir.");
    }
} 

arkadassayi(284, 220);