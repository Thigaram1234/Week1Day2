// Length of the last word

let lenlastword = (sentence)=>{
    let splitword = sentence.split(" ");
    let lastword = splitword[splitword.length-1];
    let len = lastword.length;
    return len; 
}

// To check Anagram
let anagram = (word1,word2)=>{
    let nword1 = word1.toLowerCase().replace(/[^a-z0-9]/g,"");
    let nword2 = word2.toLowerCase().replace(/[^a-z0-9]/g,"");

  
  let sortword1 = nword1.split("").sort().join("");
  let sortword2 = nword2.split("").sort().join("");
    if(sortword1==sortword2){
    return true;
  }  
    
  }

// Length of the last word
let word = "fly me to the moon"
console.log(`The lenghth of the last word in  ${word} is ${lenlastword(word)}`); 

// To find the anagram 
let word1 = "listen";
let word2 = "silent"
let result = anagram(word1, word2)
console.log(result== true ? `word  ${word1} and ${word2} are anagram`: `word${word1} and ${word2} are not  anagram`);
