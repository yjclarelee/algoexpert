function isValidSubsequence(array, sequence) {
  // Write your code here.
	for (let num of sequence) {
		console.log(array, num);
		if(array.indexOf(num) === -1) {
			return false;
		}
		else{
			array.splice(array.indexOf(num), 1);
		}
	}
	return true;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]))