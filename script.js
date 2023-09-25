function firstNonRepeatedChar(str) {
 // Write your code here
let n = str.length();
let freq = new Array(256).fill(0);
	
for(let i=0; i<n; i++){
freq[str[i].charCodeAt(0)]++;
}

for(let i=0; i<n; i++){
if(freq[str[i].charCodeAt(0)]>0 && freq[str[i].charCodeAt(0)]==1){
return str.charAt(i);
}
}
return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
