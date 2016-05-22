var Gigasecond = function(date) {
	this.date = function() {
		var DateofBirth = new Date(date);
		return new Date(DateofBirth.getTime() + Math.pow(10, 9)*1000);
	}
};



module.exports = Gigasecond
