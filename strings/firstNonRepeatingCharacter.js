function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let letterMap = new Map();
	for(let letter of string){
		if(letterMap.has(letter)) letterMap.set(letter, letterMap.get(letter)+1);
		else{
			letterMap.set(letter, 1);
		}
	}
	for(let i = 0; i < string.length; i++){
		if(letterMap.get(string[i]) === 1) return i;
	}
	return -1;
}