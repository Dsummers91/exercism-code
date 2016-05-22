var DnaTranscriber = function() {
	this.toRna = function(nucleotides) {
		nucleotides = nucleotides.split('');
		var Complement = [];
		for (var i = 0, length=nucleotides.length; i < length; i++) {
			Complement.push(getComplement(nucleotides[i]));
		}
		return Complement.join('');
	}
}

function getComplement(nucleotide) {
	if(nucleotide==='A') return 'U';
	if(nucleotide==='C') return 'G';
	if(nucleotide==='T') return 'A';
	if(nucleotide==='G') return 'C';

}

module.exports = DnaTranscriber;