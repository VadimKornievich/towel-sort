
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
	if(matrix) {
		for(let i = 0; i < matrix.length; i++) {
			let arr = matrix[i];
			while(arr.length > 0) {
				(i%2 != 0)?
				result.push(arr.pop()) : result.push(arr.shift());
			}
		}
	}
	return result;
}
