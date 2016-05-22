// http://exercism.io/submissions/5a8aa189fa244e519788e3685ad6acd8

var Gigasecond = function(date) {
	this.date = function() {
		var DateofBirth = new Date(date);
		return new Date(DateofBirth.getTime() + Math.pow(10, 9)*1000);
	}
};



module.exports = Gigasecond
