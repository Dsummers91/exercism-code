var DnaTranscriber = function() {
}

DnaTranscriber.prototype.toRna = function(nucleotides) {
	nucleotides = nucleotides.split('');
	var ComplementArray = [];
	for (var i = 0, length=nucleotides.length; i < length; i++) {
		if(nucleotides[i]==='A') Complement = 'U';
		if(nucleotides[i]==='C') Complement = 'G';
		if(nucleotides[i]==='T') Complement = 'A';
		if(nucleotides[i]==='G') Complement = 'C';
		ComplementArray.push(Complement);
	}
	return ComplementArray.join('');
};

module.exports = DnaTranscriber;