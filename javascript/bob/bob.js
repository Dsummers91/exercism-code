// http://exercism.io/submissions/03347c26aac04a90b2c0743b4401074d

var Bob = function() {};

Bob.prototype.hey = function(input) {
	if(input.replace(/ /g, '') === '') return 'Fine. Be that way!'
		else if(input.containsAllCapitals() && !input.containsOnlyNumbers()) return 'Whoa, chill out!' 
		else if(input.split('').reverse()[0] === '?') return 'Sure.'
		else return 'Whatever.';
};


String.prototype.containsAllCapitals = function() {
	return this.match(/[a-z\xfc\xe4]|[^A-Z0-9~`@#$%^&.*()<>,;:"/\ !?\xdc\xc4[\\]/) === null ;
}

String.prototype.containsOnlyNumbers = function() {
	return this.match(/[^0-9~`@#$%^&.*()<>,;:"/\ !?[\\]/) === null;
}

module.exports = Bob;
