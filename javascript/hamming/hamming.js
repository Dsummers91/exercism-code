// http://exercism.io/submissions/45a978277d554c6c87d4dd4dccd4fbec

var hamming = function(Strand1, Strand2) {
	this.compute = compute;
};

function compute(Strand1, Strand2) {
	Strand1 = Strand1.split('');
	Strand2 = Strand2.split('');
	if (Strand1.length !== Strand2.length) throw new Error('DNA strands must be of equal length.');
	return Strand1.numberOfDifferences(Strand2);
}

Array.prototype.numberOfDifferences = function(input) {
	var differences = 0;
	for (var i = this.length - 1; i >= 0; i--) {
		if(this[i] !== input[i]) {
			differences++;
		}
	}
	return differences;
};

module.exports = hamming;