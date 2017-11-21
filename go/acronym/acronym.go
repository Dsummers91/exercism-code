package acronym

import "regexp"
import "strings"

const testVersion = 2

// Abbreviate TOOK WAY TOO LONG TO FIGURE OUT A REGEX WAY WITHOUT LOOK-BEHIND/AHEAD. But this implementation doesnt really scale too well.
func Abbreviate(word string) (abbr string) {
	regex := regexp.MustCompile("(\\b[A-Za-z])|([A-Z]*)([a-z]+)([A-Z])")
	lowercase := regexp.MustCompile("^[^A-Z]{2,}")
	arr := regex.FindAllString(word, -1)
	for i := range arr {
		abbr = abbr + lowercase.ReplaceAllString(arr[i], "")
	}
	return strings.ToUpper(abbr)
}
