function binarySearch(array, target) {
  // Write your code here.
	let start = 0;
	let end = array.length - 1;
	let middle;
	while(start <= end){
		middle = Math.floor(start + (end - start)/2);
		if(array[middle] === target) return middle;
		else if(array[middle] < target) start = middle + 1;
		else end = middle - 1;
	}
	return -1;
}