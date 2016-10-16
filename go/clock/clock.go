// Clock stub file

// To use the right term, this is the package *clause*.
// You can document general stuff about the package here if you like.
package clock

import "fmt"
import "math"

// The value of testVersion here must match `targetTestVersion` in the file
// clock_test.go.
const testVersion = 4

// Clock API as stub definitions.  No, it doesn't compile yet.
// More details and hints are in clock_test.go.
type Clock struct {
	hour, minute int
}

func New(hour, minute int) Clock {
	if minute >= 60 {
		hour += int(math.Floor(float64(minute) / 60))
	}
	for minute < 0 {
		minute += 60
		hour--
	}
	for hour < 0 {
		hour += 24
	}
	minute = minute % 60
	hour = hour % 24
	return Clock{hour, minute}
}

func (c Clock) String() string {
	time := fmt.Sprintf("%2.2v", c.hour) + ":" + fmt.Sprintf("%2.2v", c.minute)
	return time
}

func (c Clock) Add(minutes int) Clock {
	c.minute += minutes
	for c.minute < 0 {
		c.minute += 60
		c.hour--
	}
	for c.hour < 0 {
		c.hour += 24
	}
	if c.minute >= 60 {
		c.hour += int(math.Floor(float64(c.minute) / 60))
	}
	c.minute = c.minute % 60
	c.hour = c.hour % 24
	return Clock{c.hour, c.minute}
}

// Remember to delete all of the stub comments.
// They are just noise, and reviewers will complain.
