package leap

const testVersion = 2

// It's good style to write a comment here documenting IsLeapYear.
func IsLeapYear(year int) bool {
	var leapYear bool
	if year%4 == 0 && (year%100 != 0 || year%400 == 0) {
		leapYear = true
	}
	return leapYear
}
