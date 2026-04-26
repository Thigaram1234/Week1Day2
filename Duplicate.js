function duplicate(arraynum){
    let j=0 , i=0;
        let dup = [];
    for ( i = 0; i < arraynum.length; i++) {
        for (j = i+1; j < array.length; j++) {
            if (arraynum[i]===arraynum[j]) {
                if(!dup.includes(array[i])){
                    dup.push(array[i])
                }            
                
                       
       }
            
        }      
              
    }
return dup;
}
let array =[1,2,2,34,4,5,6,1,8,34];
console.log(duplicate(array))

