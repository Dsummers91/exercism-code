'use strict'

class Pangram {
	constructor(input) {
		this.sentence = input.split('').join().replace(/ /g, '').toLowerCase();
		this.isPangram = isPangram;
	}
}


function isPangram() {
	let alphabet = 'abcdefghijklmopqrstuvwxyz'.split('');
	for (let i = 0, length = alphabet.length; i < length; i++) {
		if(this.sentence.indexOf(alphabet[i])!==-1) continue;
		return false;
	}
	return true;
}


module.exports = Pangram;