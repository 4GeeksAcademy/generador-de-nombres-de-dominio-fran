let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io', '.es', '.me'];

for (let p of pronoun) {
 for (let a of adj) {
   for (let n of noun) {
    for(let ext of extensions){
     let extWithoutDot = ext.replace('.', '');

    if (n.endsWith(extWithoutDot)) {
     let hackDomain = n.slice(0, -extWithoutDot.length) + ext;
     console.log(hackDomain);
     } else {
     console.log(p + a + n + ext);  
     }
    }
   } 
  } 
}
    