function setMap(string, map){
  for(const letter of string){
   if(map.has(letter)) map.set(letter, map.get(letter)+1)
   else map.set(letter, 1);
 }
}

function generateDocument(characters, document) {
 let charMap = new Map();
 let documentMap = new Map();
 setMap(characters, charMap);
 setMap(document, documentMap);
 for(const [key, value] of documentMap){
   if(charMap.get(key) === undefined || charMap.get(key) < value) return false;
 }
 return true;
}