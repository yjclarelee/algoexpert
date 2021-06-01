class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getBranchSums(node, answer, branchSum){
	branchSum += node.value;
	if(!node.left && !node.right) {
		answer.push(branchSum);
		return;
	}
	if(node.left) getBranchSums(node.left, answer, branchSum);
	if(node.right) getBranchSums(node.right, answer, branchSum);
}

function branchSums(root) {
  // Write your code here.
	let answer = [];
	let branchSum = 0;
	getBranchSums(root, answer, branchSum);
	return answer;
}