
//HATA VERİYOR

function findPrime(...number){

     for(j = 0; j < number.length; j++){

        let prime = false;
         for (i = 2; i < j; i++){
           if (number[j] % i === 0){
                prime = true;
            } 
         } 

          if(prime == false) {
            console.log(number[j] + " asaldır.");
          }else{
            console.log(number[j] + " asal değildir.");
          }
     }
}

findPrime(75,7,16,17);

