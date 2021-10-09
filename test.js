// 1. Is Unique
const isUnique = (str) => {
    const ASCII_CHARS = 256;
    if(str.length > ASCII_CHARS) {
      return false;
    }

    const chars = Array(ASCII_CHARS).fill(false);
    
    for(let char of str){
      const i = char.charCodeAt(0);
      if (chars[i] === true) {
        return false;
      }
      chars[i] = true;
    }
    
    return true;
};
  
console.log(isUnique('Anthony'));




// 2. Check Permutation
const isPermutation = (str1,str2) => {
    let sortOne = str1.split('').sort().join('');
    let sortTwo = str2.split('').sort().join('');
    if(sortOne === sortTwo) {
      return true;
    } else {
     return false; 
    }
  };
  
  console.log(isPermutation("mad", "dam"));




// 3. URLify
const  urlify = (str) => {
    const myStr = str.split(' ');
    let newStr = [];
    let oldStr = myStr.length;
    for(let word of myStr){
        if(newStr.length + 1 < oldStr ){
            newStr.push(word + '%20');
        }
        else {
            newStr.push(word);
        }
    }
    return newStr.join('');

};

console.log(urlify('I am Anthony'));



// 4. Palindrome Permutation
const isPalindromePermutation = (str) => {
    const charSet = new Set();
    str.split('').forEach(char => {
      if (charSet.has(char)) {
        charSet.delete(char);
      } else {
        charSet.add(char)
      }
    })
    return charSet.size <= 1;
  };
  
  console.log(isPalindromePermutation("racecarr"));






// 5. One Way






// String Compression
const strCompressor = (str) => {
    let compressed = "";
    let map = {};
    
    str.split("").forEach((e, i) => {
      map[e] = 0;
    })
    
     str.split("").forEach((e, i) => {
      map[e] += 1;
    })
    
    for (const elem in map) {
      compressed += elem + map[elem];
    }
    if (compressed.length > str.length) {
      return str;
    } else {
      return compressed;
    }
  };
  
  console.log(strCompressor('aaabbccccaa'));




