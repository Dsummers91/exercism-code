'use strict'

class Isogram {
constructor(input) {
	this.word = input;
	this.isIsogram = isIsogram;
  }
}

function isIsogram() {
	let letterList = this.word.replace(/[-\' ]/g, '').split('').sort();
	for (var i = 0, length=letterList.length-1; i < length; i++) {
		let currentLetter = letterList[i].toLowerCase();
		let nextLetter = letterList[i+1].toLowerCase();
		if(currentLetter !== nextLetter) continue;
		return false;
	}
	return true;
}

module.exports = Isogram;