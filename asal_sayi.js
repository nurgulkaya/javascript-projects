function asal(){

    let count = 0;
    for(j = 2; j <= 1000; j++){

        let prime = false;
        for ( i = 2; i < j; i++){
           if (j % i === 0){
                prime = true;
                break;
            } 
        }
        if(prime == false) {
            console.log(j+"\n");
            count++; 
        }
    }
}    
asal();