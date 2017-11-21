package raindrops

import "strconv"

const testVersion = 2

// Convert int to string
func Convert(num int) (result string) {
	if isDivisibleBy3(num) {
		result += "Pling"
	}

	if isDivisibleBy5(num) {
		result += "Plang"
	}

	if isDivisibleBy7(num) {
		result += "Plong"
	}

	if result == "" {
		result = strconv.Itoa(num)
	}

	return
}

func isDivisibleByN(num, divisor int) bool {
	if num%divisor == 0 {
		return true
	}
	return false
}

func isDivisibleBy3(num int) bool {
	return isDivisibleByN(num, 3)
}

func isDivisibleBy5(num int) bool {
	return isDivisibleByN(num, 5)
}

func isDivisibleBy7(num int) bool {
	return isDivisibleByN(num, 7)
}
