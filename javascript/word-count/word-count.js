var Words = function() {};

Words.prototype.count = function(words) {
	words = words.split(' ');
	WordCount = {};
	for(var i = 0, length=words.length; i<length; i++) {
		var word = words[i];
		WordCount[word] = WordCount.hasOwnProperty(word) ? WordCount[word]+1 : 1;
	} 
	return WordCount;
};

module.exports = Words;