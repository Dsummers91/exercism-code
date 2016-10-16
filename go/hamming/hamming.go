package hamming

import (
	"errors"
	"strings"
)

const testVersion = 5

// Distance is
func Distance(a, b string) (distance int, err error) {
	c := strings.Split(a, "")
	d := strings.Split(b, "")
	if len(c) == len(d) {
		for index := range c {
			if c[index] != d[index] {
				distance++
			}
		}
	} else {
		err = errors.New("DIstance does not match")
	}
	return
}
