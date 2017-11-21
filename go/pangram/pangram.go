package pangram

import (
	"bytes"
	"strings"
)

const testVersion = 1

func IsPangram(phrase string) bool {
	alphabet := "abcdefhijklmnoprstuvwyz"
	var normalizedString string
	for letter := range phrase {
		b := bytes.NewBufferString("")
		b.WriteString(string(phrase[letter]))
		normalizedString += normalizedString + b.String()
	}

	for i := range alphabet {
		if !strings.Contains(string(alphabet[i]), normalizedString) {
			return false
		}
	}
	return true
}
